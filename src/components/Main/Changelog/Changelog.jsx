import React, { useState } from "react";
import { changelogScreen } from "../../../store";
import './Changelog.scss';
import NavPages from "../../UI/NavPages/NavPages";
import FilterChangelog from "./FilterChangelog/FilterChangelog";
import ListChangelog from "./ListChangelog/ListChangelog";

const Changelog = () => {
	const [state, setState] = useState(changelogScreen);

	return (
		<div className='changelog'>
			<FilterChangelog state={state.filter} />
			<ListChangelog state={state.list}/>
			<NavPages/>
		</div>
	)
}

export default Changelog;