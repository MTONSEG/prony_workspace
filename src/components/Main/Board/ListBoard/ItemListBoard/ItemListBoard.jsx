import React from "react";
import Status from "../../../../UI/Status/Status";
import { MessageIcon } from "../../../../UI/SVGIcons/SVGIcons";
import LikeRoadmapWS from "../../../Workspace/RoadmapWorkspace/ItemRoadmapWorkspace/LikeRoadmapWS/LikeRoadmapWS";
import './ItemListBoard.scss';

const ItemListBoard = ({ style, likes, messages, status, title, text }) => {

	return (
		<li style={style ? style : {}}
			className='item-list-board'>
			<LikeRoadmapWS amount={likes} />

			<div className="item-list-board__body">
				<h1 className="item-list-board__title">
					{title}
				</h1>
				<Status status={status} />
				<p className="item-list-board__text">{text}</p>
			</div>

			<div className='item-list-board__messages'>
				<MessageIcon />
				<span className="item-list-board__messages-amount">
					{messages}
				</span>
			</div>
		</li>
	)
}

export default ItemListBoard;