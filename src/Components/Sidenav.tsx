import React from 'react';
import fintech from '../assets/fintech.svg';
import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';
import SVGComponent, { SVGLibrary } from '../assets/SVGComponent';

const Sidenav = () => {
	return (
		<nav className='sidenav box bg-3'>
			<SVGComponent children={SVGLibrary.fintech} height='50' />
			<ul>
				<li>
					<span>
						<img src={resumo} alt='' />
					</span>
					<a href=''>Resumo</a>
				</li>
				<li>
					<span>
						<img src={vendas} alt='' />
					</span>
					<a href=''>Vendas</a>
				</li>
			</ul>
		</nav>
	);
};

export default Sidenav;
