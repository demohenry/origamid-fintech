import moment from 'moment';
import React from 'react';
import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { IVenda } from '../Context/DataContext';

type VendaDia = {
	data: string;
	pago: number;
	processando: number;
	falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
	const days = data.reduce((acc: { [key: string]: VendaDia }, item) => {
		const day = item.data.split(' ')[0];

		if (!acc[day]) {
			acc[day] = {
				data: day,
				pago: 0,
				falha: 0,
				processando: 0,
			};
		}
		acc[day][item.status] += item.preco;
		return acc;
	}, {});

	return Object.values(days).map((day) => ({
		...day,
		data: day.data.substring(5),
	}));
}
function formatXAxis(tickItem: moment.MomentInput) {
	return moment(tickItem).format('D/MM');
}

const ChartsSells = ({ data }: { data: IVenda[] }) => {
	const transformedData = transformData(data);

	return (
		<ResponsiveContainer width={'99%'} height={400}>
			<LineChart width={730} height={250} data={transformedData}>
				<XAxis dataKey='data' tickFormatter={formatXAxis} />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='pago' stroke='var(--sucess)' />
				<Line type='monotone' dataKey='processando' stroke='var(--warning)' />
				<Line type='monotone' dataKey='falha' stroke='#fd0a0a' />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default ChartsSells;
