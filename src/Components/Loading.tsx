import React from 'react';

const Loading = () => {
	return (
		<div className='loadin-style'>
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
