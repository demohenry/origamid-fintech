import React from 'react';
import ItemSell from '../Components/ItemSell';
import Loading from '../Components/Loading';
import { IVenda, useData } from '../Context/DataContext';
import useFetch from '../Hooks/useFetch';

const Vendas = () => {
	const { data } = useData();
	const { loading } = useFetch<IVenda[]>(`https://data.origamid.dev/vendas`);

	if (loading) return <Loading />;
	if (!data) return null;
	return (
		<ul className='vendas-container'>
			{data.map((venda) => (
				<li key={venda.id}>
					<ItemSell venda={venda} />
				</li>
			))}
		</ul>
	);
};

export default Vendas;
