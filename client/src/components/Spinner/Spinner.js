import React from 'react';
import spinner from './spinner.gif';

export default () => (
	<div
		style={{
			height: '100vh',
			width: '100vw',
			background: 'black',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			zIndex: 2,
			position: 'absolute',
		}}
	>
		<img
			src={spinner}
			style={{ display: 'block', zIndex: 3 }}
			alt='Loading...'
		/>
	</div>
);
