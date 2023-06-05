import React from "react";
import { LikeIcon } from "../../../../UI/SVGIcons/SVGIcons";
import './ItemRoadmapWorkspace.scss';
import LabelItemRoadmapWS from "./LabelItemRoadmapWS/LabelItemRoadmapWS";

const ItemRoadmapWorkspace = ({ title, labelBg, list }) => {

	return (
		<li className='item-roadmap-ws'>
			<LabelItemRoadmapWS
				title={title}
				bg={labelBg}
			/>
			<ul className="item-roadmap-ws__list">
				{
					list.map(el => (
						<li key={el.id} className="item-roadmap-ws__item">
							<div className="item-roadmap-ws__likes">
								<LikeIcon />
								<span>{el.amount}</span>
							</div>
							<div className="item-roadmap-ws__body-item">
								<h1 className="item-roadmap-ws__title-item">
									{el.title}
								</h1>
								<p className="item-roadmap-ws__subtitle-item">
									{el.subtitle}
								</p>
							</div>
						</li>
					))
				}
			</ul>
		</li>
	)
}

export default ItemRoadmapWorkspace;