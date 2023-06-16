import React from "react";
import './BigTitleClient.scss';

const BigTitleClient = ({ children, mb, style }) => {

	return (
		<h1 style={style}
			className='big-title-client'>{children}</h1>
	)
}

export default BigTitleClient;