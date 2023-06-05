import React, { useState } from "react";
import { boardScreen } from "../../../store";
import './Board.scss';
import FilterBoard from "./FilterBoard/FilterBoard";
import ListBoard from "./ListBoard/ListBoard";
import NavPages from "./NavPages/NavPages";

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
			<div className="board__right">
				<ListBoard
					style={
						{
							width: '100%',
							paddingTop: '21px'
						}
					}
					state={state} />
				<NavPages/>
			</div>

		</div>
	)
}

export default Board;