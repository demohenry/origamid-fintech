import React from 'react';
import { NavLink } from 'react-router-dom';
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
					<NavLink to='/'>Resumo</NavLink>
				</li>
				<li>
					<span>
						<img src={vendas} alt='' />
					</span>
					<NavLink to='/vendas'>Vendas</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Sidenav;
