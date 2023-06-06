import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ url, onClick, children, style }) => {
	return (
		<Link
			to={url}
			style={style ? style : {}}
			className='button'
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

export default Button;