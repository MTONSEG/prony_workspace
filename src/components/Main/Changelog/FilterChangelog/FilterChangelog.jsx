import React from "react";
import SelectFormContainer from "../../../UI/Forms/SelectFormContainer/SelectFormContainer";
import './FilterChangelog.scss';

const FilterChangelog = ({ state, style }) => {
	return (
		<div style={style ? style : {}}
			className='filter-changelog'>
			<SelectFormContainer
				title={state.title}
				def={state.def}
				list={state.list}
				label={true}
			/>
		</div>
	)
}

export default FilterChangelog;