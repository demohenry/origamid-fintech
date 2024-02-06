import React, { ComponentProps } from 'react';
import {
	errMessageStyle,
	inputStyle,
	labelStyle,
} from '../Styles/ElementsStyles';

type IDateInput = ComponentProps<'input'> & {
	label: string;
	errorMessage?: string;
};

const DateInput = ({ label, errorMessage, ...props }: IDateInput) => {
	return (
		<div>
			<label style={labelStyle} htmlFor={label}>
				{label}
			</label>
			<input
				style={inputStyle}
				id={label}
				name={label}
				type='date'
				{...props}
			/>
			<div>
				<span style={errMessageStyle}>{errorMessage}</span>
			</div>
		</div>
	);
};

export default DateInput;
