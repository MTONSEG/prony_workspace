import React from "react";
import ItemListBoard from "./ItemListBoard/ItemListBoard";
import './ListBoard.scss';

const ListBoard = ({ state, style }) => {
	return (
		<ul style={style ? style : {}}
			className='list-board'>
			{
				state.list.map(el => (
					<ItemListBoard
						key={el.id}
						status={el.status}
						likes={el.likes}
						messages={el.messages}
						title={el.title}
						text={el.text}
					/>
				))
			}
		</ul>
	)
}

export default ListBoard;