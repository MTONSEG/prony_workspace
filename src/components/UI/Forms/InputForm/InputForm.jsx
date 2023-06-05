import React from "react";
import '../Forms.scss';

const InputForm = ({
	type,
	ph,
	name,
	value,
	setValue,
	style
}) => {

	const onInputChangeHandler = e => { setValue(e.currentTarget.value) }

	return (
		<>
			<input
				style={style ? style : {}}
				className='input'
				type={type ? type : 'text'}
				placeholder={ph ? ph : ''}
				name={name ? name : ''}
				aria-label={name ? name : ''}
				value={value}
				setValue={setValue}
				onChange={e => { onInputChangeHandler(e) }}
			/>
		</>
	)
}

export default InputForm;