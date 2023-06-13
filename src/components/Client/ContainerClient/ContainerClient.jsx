import React from "react";
import './ContainerClient.scss';

const ContainerClient = ({ style, children }) => {

	return (
		<div className="client-container" style={style ? style : {}}>
			{children}

		
		</div>
	)
}

export default ContainerClient;