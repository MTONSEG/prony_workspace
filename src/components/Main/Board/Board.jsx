import React, { useState } from "react";
import { boardScreen } from "../../../store";
import './Board.scss';
import FilterBoard from "./FilterBoard/FilterBoard";
import ListBoard from "./ListBoard/ListBoard";

const Board = () => {
	const [state, setState] = useState(boardScreen);

	return (
		<div className='board'>
			<FilterBoard
				state={state}
				style={
					{
						width: '100%',
						flex: '0 0 360px',
					}
				} />
			<ListBoard style={
				{
					width: '100%',
					paddingTop: '21px'
				}
			} />
		</div>
	)
}

export default Board;