import React, { useEffect, useState } from 'react';
import { useData } from '../Context/DataContext';
import DateInput from './DateInput';

const DateRange = () => {
	const { inicio, setInicio, final, setFinal } = useData();
	const [invalidDate, setInvalidDate] = useState<boolean>(false);

	useEffect(() => {
		handleInvalidDate();
	}, [inicio, final]);

	function handleInvalidDate() {
		if (inicio >= final) {
			return setInvalidDate(true);
		}
		return setInvalidDate(false);
	}

	return (
		<form className='box flex' onSubmit={(e) => e.preventDefault()}>
			<DateInput
				label='Inicio'
				value={inicio}
				onChange={({ target }) => setInicio(target.value)}
			/>
			<DateInput
				label='Final'
				value={final}
				onChange={({ target }) => setFinal(target.value)}
				errorMessage={
					invalidDate ? 'A data de início deve ser antes da data de final' : ''
				}
			/>
		</form>
	);
};

export default DateRange;
