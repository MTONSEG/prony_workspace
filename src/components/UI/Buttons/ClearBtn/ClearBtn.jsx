import React from "react";
import './ClearBtn.scss';

const ClearBtn = ({ title, style }) => {
	return (
		<button
			style={style ? style : {}}
			className='clear-btn'>
			{title}
		</button>
	)
}

export default ClearBtn;