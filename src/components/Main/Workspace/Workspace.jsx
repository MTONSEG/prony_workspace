import React, { useState } from "react";
import { mainScreen } from "../../../store";
import FeedbackWorkspace from "./FeedbackWorkspace/FeedbackWorkspace";
import RoadmapWorkspace from "./RoadmapWorkspace/RoadmapWorkspace";
import './Workspace.scss';

const Workspace = () => {
	const [state, setState] = useState(mainScreen);

	return (
		<div className='workspace'>
			<FeedbackWorkspace state={state.feedback} />
			<RoadmapWorkspace state={state.roadmap} />
		</div>
	)
}

export default Workspace;