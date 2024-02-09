import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DateRange from './DateRange';
import Month from './Months';

const Header = () => {
	const [title, setTitle] = useState('');
	const location = useLocation();

	useEffect(() => {
		const formattedLocation =
			location.pathname.replace('/', '').charAt(0).toUpperCase() +
			location.pathname.slice(2);
		setTitle(!formattedLocation ? 'Resumo' : formattedLocation);
		document.title = !formattedLocation ? 'Resumo' : 'Vendas';
	}, [location]);

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
