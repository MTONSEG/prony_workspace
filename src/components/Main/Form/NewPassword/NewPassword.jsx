import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import './NewPassword.scss';

const NewPassword = ({state}) => {
	const [newPass, setNewPass] = useState('');
	const [repeatPass, setRepeatPass] = useState('');

	return (
		<div className='new-pass'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper style={{ maxWidth: '444px' }}>
				<InputFormContainer
					name={state.new.title}
					title={state.new.title}
					ph={state.new.ph}
					type={state.new.type}
					view={true}
					value={newPass}
					setValue={setNewPass}
				/>
				<InputFormContainer
					style={{ margin: 0 }}
					name={state.repeat.title}
					title={state.repeat.title}
					ph={state.repeat.ph}
					type={state.repeat.type}
					view={true}
					value={repeatPass}
					setValue={setRepeatPass}
				/>
				<ButtonWrapperForm style={{
					marginTop: '29px',
					justifyContent: 'center'
				}}>
					<Button style={{
						width: '100%',
						maxWidth: '182px',
						textAlign: 'center'
					}}>
						Submit
					</Button>
				</ButtonWrapperForm>
			</FormWrapper>
		</div>
	)
}

export default NewPassword;