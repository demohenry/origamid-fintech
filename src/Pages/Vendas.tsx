import React from 'react';
import ItemSell from '../Components/ItemSell';
import { useData } from '../Context/DataContext';

const Vendas = () => {
	const { data } = useData();

	if (!data) return null;
	return (
		<ul>
			{data.map((venda) => (
				<li key={venda.id}>
					<ItemSell venda={venda} />
				</li>
			))}
		</ul>
	);
};

export default Vendas;
