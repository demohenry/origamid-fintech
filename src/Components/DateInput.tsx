import React, { ComponentProps } from 'react';
import { inputStyle, labelStyle } from '../Styles/ElementsStyles';

type IDateInput = ComponentProps<'input'> & {
	label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
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
		</div>
	);
};

export default DateInput;
