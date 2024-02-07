import { CSSProperties } from 'react';

const generalStyle: CSSProperties = {
	fontSize: '1rem',
	color: 'var(--color-2)',
	padding: 'var(--gap-s) .75rem',
	backgroundColor: 'var(--color-4)',
	borderRadius: 'var(--gap)',
};

export const labelStyle: CSSProperties = {
	display: 'block',
	marginBottom: 'var(--gap-s)',
	fontWeight: '600',
	...generalStyle,
};

export const inputStyle: CSSProperties = {
	border: 'none',
	fontFamily: 'monospace',
	...generalStyle,
};

export const errMessageStyle: CSSProperties = {
	color: 'red',
	fontSize: '10px',
};

export const monthButtonStyle: CSSProperties = {
	padding: 'var(--gap) var(--gap-s)',
	backgroundColor: 'var(--color-3)',
	borderRadius: 'var(--gap)',
	border: 'none',
	color: 'var(--color-2)',
	fontWeight: '600',
	textTransform: 'capitalize',
};
