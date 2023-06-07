import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import './ChangePassword.scss';

const ChangePassword = ({ state }) => {
	const [currentPass, setCurrentPass] = useState('');
	const [newPass, setNewPass] = useState('');
	const [repeatPass, setRepeatPass] = useState('');

	return (
		<div className='change-pass'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper style={{ maxWidth: '444px' }}>
				<InputFormContainer
					name={state.current.title}
					title={state.current.title}
					ph={state.current.ph}
					type={state.current.type}
					value={currentPass}
					setValue={setCurrentPass}
				/>
				<InputFormContainer
					name={state.new.title}
					title={state.new.title}
					ph={state.new.ph}
					type={state.new.type}
					value={newPass}
					setValue={setNewPass}
				/>
				<InputFormContainer
					style={{ margin: 0 }}
					name={state.repeat.title}
					title={state.repeat.title}
					ph={state.repeat.ph}
					type={state.repeat.type}
					value={repeatPass}
					setValue={setRepeatPass}
				/>
				<ButtonWrapperForm style={{ marginTop: '29px' }}>
					<ClearBtn
						style={{
							width: 'max-content',
							color: '#1565C0'
						}}
						title='Cancel' />
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

export default ChangePassword;