import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import { IVenda } from '../Context/DataContext';
import useFetch from '../Hooks/useFetch';

type VendaSemData = Omit<IVenda, 'data'>;

const Venda = () => {
	const { id } = useParams();

	const { data, loading } = useFetch<VendaSemData>(
		`https://data.origamid.dev/vendas/${id}`
	);

	if (loading) return <Loading />;
	if (!data) return null;

	return (
		<div>
			<div className='box mb'>
				<strong>Nome:</strong> {data.nome}
			</div>
			<div className='box mb'>
				<strong>Preço:</strong>{' '}
				{data.preco.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<div className='box mb'>
				<strong>Status: </strong>
				{data.status.charAt(0).toUpperCase() + data.status.slice(1)}
			</div>
			<div className='box mb'>
				<strong>Forma de pagamento: </strong>
				{data.pagamento.charAt(0).toUpperCase() + data.pagamento.slice(1)}
			</div>
		</div>
	);
};

export default Venda;
