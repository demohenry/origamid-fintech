import React from 'react';
import { useData } from '../Context/DataContext';
import DateRange from './DateRange';
import Month from './Months';

const Header = () => {
	return (
		<header className='mb'>
			<div className='mb'>
				<DateRange />
			</div>
			<Month />
		</header>
	);
};

export default Header;
