import React from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import ItemRoadmapWorkspace from "./ItemRoadmapWorkspace/ItemRoadmapWorkspace";
import './RoadmapWorkspace.scss';

const RoadmapWorkspace = ({ state }) => {

	let roadmapItems = state.list.map(el => (
		<ItemRoadmapWorkspace
			key={el.id}
			labelBg={el.labelBg}
			title={el.title}
			list={el.list}
		/>
	))

	return (
		<div className='roadmap-ws'>
			<BigTitle mb='20px'>
				{state.title}
			</BigTitle>
			<ul className="roadmap-ws__list">
				{roadmapItems}
			</ul>
		</div>
	)
}

export default RoadmapWorkspace;