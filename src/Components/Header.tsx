import React from 'react';
import { useState } from 'react';
import DateRange from './DateRange';
import Month from './Months';

const Header = () => {
	const [title, setTitle] = useState('Resumo');

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
