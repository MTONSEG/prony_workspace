import React from "react";
import { MessageIcon } from "../../../../UI/SVGIcons/SVGIcons";
import LikeRoadmapWS from "../../../Workspace/RoadmapWorkspace/ItemRoadmapWorkspace/LikeRoadmapWS/LikeRoadmapWS";
import './ItemListBoard.scss';

const ItemListBoard = ({ style, likes, messages, status, title, text }) => {

	function getStatusColor(status) {
		switch (status) {
			case 'Complete':
				return '#43A047';
			case 'In progress':
				return '#F2C94C'
			default:
				return '#fff'
		}
	}

	return (
		<li style={style ? style : {}}
			className='item-list-board'>
			<LikeRoadmapWS amount={likes} />

			<div className="item-list-board__body">
				<h1 className="item-list-board__title">
					{title}
				</h1>
				<div className='item-list-board__status'>
					<span
						className='item-list-board__status-label'
						style={{ background: getStatusColor(status) }}></span>
					<span className='item-list-board__status-text'>{status}</span>
				</div>
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