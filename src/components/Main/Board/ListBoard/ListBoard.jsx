import React from "react";
import FilterBoard from "../FilterBoard/FilterBoard";
import './ListBoard.scss';

const ListBoard = ({ state, style }) => {
	return (
		<div style={style ? style : {}}
			className='list-board'>
			
		</div>
	)
}

export default ListBoard;