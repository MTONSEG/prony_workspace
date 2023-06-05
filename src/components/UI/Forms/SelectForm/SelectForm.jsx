import React from "react";
import { SearchIcon } from "../../SVGIcons/SVGIcons";
import '../Forms.scss';
import SelectForm from "../InputForm/InputForm";

const SelectForm = ({ style, value, setValue, ph }) => {
	return (
		<div style={style ? style : {}}
			className="search-form">
			<InputForm
				style={{
					paddingRight: '34px'
				}}
				ph={ph ? ph : ''}
				name='Search Input'
				value={value}
				setValue={setValue}
			/>
			<button className='search-form__btn'>
				<SearchIcon />
			</button>
		</div>
	)
}

export default SelectForm;