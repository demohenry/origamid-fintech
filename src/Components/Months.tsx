import React from 'react';
import MouthButton from './MouthButton';

const Months = () => {
	return (
		<div className='flex'>
			<MouthButton n={-2} />
			<MouthButton n={-1} />
			<MouthButton n={0} />
		</div>
	);
};

export default Months;
