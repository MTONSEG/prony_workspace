import React from "react";
import '../Forms.scss';
import SelectForm from "../SelectForm/SelectForm";

const SelectFormContainer = ({ style, title, list, def }) => {
	return (
		<div className="select-container" style={style ? style : {}}>
			<h2 className="select-container__title">{title}</h2>
			<SelectForm
				list={list}
				def={def}
			/>
		</div>
	)
}

export default SelectFormContainer;