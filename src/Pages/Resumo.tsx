import React from 'react';
import { useData } from '../Context/DataContext';

const Resumo = () => {
	const { data } = useData();

	if (!data) return null;
	return (
		<section>
			<div className='resumo flex mb'>
				<div className='box'>
					<h2>Vendas</h2>
					<span>
						{data
							.filter((i) => i.status !== 'falha')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
					<div>
						<span
							style={{ color: 'red', fontSize: '10px', whiteSpace: 'noWrap' }}
							title='Vendas que não tiveram o status concluído'
						>
							{data
								.filter((i) => i.status == 'falha')
								.reduce((acc, vendas) => acc + vendas.preco, 0)
								.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})}{' '}
							(Transações falhas -{' '}
							{data.filter((i) => i.status == 'falha').length})
						</span>
					</div>
				</div>
				<div className='box'>
					<h2>Recebido</h2>
					<span>
						{data
							.filter((i) => i.status == 'pago')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
				</div>
				<div className='box'>
					<h2>Processando</h2>
					<span>
						{data
							.filter((i) => i.status == 'processando')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
				</div>
			</div>
			<div className='box'>Gráficos</div>
		</section>
	);
};

export default Resumo;
