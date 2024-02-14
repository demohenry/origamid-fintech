import React from 'react';

const LoadingStyle = {
	border: 'var(--gap-s) solid var(--color-3)',
	borderRightColor: 'blue',
	width: 'var(--gap)',
	height: 'var(--gap)',
	borderRadius: '50%',
	animation: 'spin 1s infinite',
};

const Loading = () => {
	return (
		<div style={LoadingStyle}>
			<style>
				{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
         `}
			</style>
		</div>
	);
};

export default Loading;
