import React from 'react';
import './ButtonWrapperForm.scss';

const ButtonWrapperForm = ({ children, style }) => {
	return (
		<div className='button-wrap' style={style}>
			{children}
		</div>
	);
}

export default ButtonWrapperForm;