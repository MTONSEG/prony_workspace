import React from "react";
import './BigTitle.scss';

const BigTitle = ({ children, mb }) => {

	return (
		<h1 style={
			mb
				? { marginBottom: mb }
				: {}
		}
			className='big-title'>{children}</h1>
	)
}

export default BigTitle;