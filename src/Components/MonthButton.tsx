import React from 'react';
import { useData } from '../Context/DataContext';
import { MonthButtonStyle } from '../Styles/ElementsStyles';

function MonthName(n: number) {
	const date = new Date();
	date.setMonth(date.getMonth() + n);
	return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate(date: Date) {
	const dateString = date.toISOString().split('T')[0];
	return dateString;
}

const MonthButton = ({ n }: { n: number }) => {
	const { setInicio, setFinal } = useData();

	function setMonth(n: number) {
		const date = new Date();
		date.setMonth(date.getMonth() + n);

		const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
		const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

		setInicio(formatDate(firstDay));
		setFinal(formatDate(lastDay));
	}

	return (
		<button style={MonthButtonStyle} onClick={() => setMonth(n)}>
			{MonthName(n)}
		</button>
	);
};

export default MonthButton;
