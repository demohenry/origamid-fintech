import React from 'react';
import { useData } from '../Context/DataContext';
import { failSellSpan } from '../Styles/ElementsStyles';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

const Resumo = () => {
	const { data } = useData();
	const [showFailStatus, setShowFailStatus] = useState(false);

	if (!data) return null;
	return (
		<section>
			<div className='resumo flex mb'>
				<div className='box of-h' style={{ minWidth: 'fit-content' }}>
					<h2>Vendas</h2>
					<span className='sucess'>
						{data
							.filter((i) => i.status !== 'falha')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
					{data.filter((i) => i.status == 'falha').length && showFailStatus ? (
						<FaRegEye
							style={{ cursor: 'pointer', float: 'right' }}
							onClick={() => setShowFailStatus(!showFailStatus)}
							title='Esconder vendas falhas'
							rel='tooltip'
						/>
					) : (
						''
					)}
					{data.filter((i) => i.status == 'falha').length && !showFailStatus ? (
						<FaRegEyeSlash
							style={{ cursor: 'pointer', float: 'right' }}
							onClick={() => setShowFailStatus(!showFailStatus)}
							title='Exibir vendas falhas'
							rel='tooltip'
						/>
					) : (
						''
					)}
					<div className={`fail-status ${showFailStatus ? 'active' : ''}`}>
						{data.filter((i) => i.status == 'falha').length ? (
							<span
								style={failSellSpan}
								title={'Vendas que não tiveram o status concluído'}
							>
								{data
									.filter((i) => i.status == 'falha')
									.reduce((acc, vendas) => acc + vendas.preco, 0)
									.toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									})}{' '}
								(Transações falhas:{' '}
								{data.filter((i) => i.status == 'falha').length})
							</span>
						) : (
							''
						)}
					</div>
				</div>
				<div className='box'>
					<h2>Recebido</h2>
					<span className='sucess'>
						{data
							.filter((i) => i.status == 'pago')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
				</div>
				<div className='box'>
					<h2>Processando</h2>
					<span className='warning'>
						{data
							.filter((i) => i.status == 'processando')
							.reduce((acc, vendas) => acc + vendas.preco, 0)
							.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</span>
				</div>
			</div>
			<div className='box mb'>Gráficos</div>
		</section>
	);
};

export default Resumo;
