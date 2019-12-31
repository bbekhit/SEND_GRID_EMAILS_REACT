import React from 'react';

function Loader(props) {
	return (
		<div className={!props.load ? 'loaderContainer' : ''}>
			<div className='loader'></div>
		</div>
	);
}

export default Loader;
