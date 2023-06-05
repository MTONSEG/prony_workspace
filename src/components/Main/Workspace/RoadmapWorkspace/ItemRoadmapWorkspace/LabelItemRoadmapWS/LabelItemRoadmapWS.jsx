import React from "react";
import './LabelItemRoadmapWS.scss';

const LabelItemRoadmapWS = ({ title, bg }) => {

	return (
		<div style={bg
			? { background: bg }
			: {}
		}
			className="label-roadmap-ws">
			{title}
		</div>
	)
}

export default LabelItemRoadmapWS;