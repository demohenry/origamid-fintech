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
					<NavLink to='/'>
						<span>
							<img src={resumo} alt='' />
						</span>
						Resumo
					</NavLink>
				</li>
				<li>
					<NavLink to='/vendas'>
						<span>
							<img src={vendas} alt='' />
						</span>
						Vendas
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Sidenav;
