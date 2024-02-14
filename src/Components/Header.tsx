import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DateRange from './DateRange';
import Month from './Months';

const Header = () => {
	const [title, setTitle] = useState('');
	const location = useLocation();

	useEffect(() => {
		const segments = location.pathname.split('/');
		const formattedLocation =
			segments[1] === 'vendas'
				? 'Vendas'
				: segments[1].charAt(0).toUpperCase() + segments[1].slice(1);
		setTitle(!formattedLocation ? 'Resumo' : formattedLocation);
		document.title = !formattedLocation
			? 'Fintech | Resumo'
			: 'Fintech | Vendas';
	}, [location]);

	console.log(location);

	return (
		<header className='mb'>
			<div className='daterange mb'>
				<DateRange />
				<h1 className='box bg-3'>{title}</h1>
			</div>
			<Month />
		</header>
	);
};

export default Header;
