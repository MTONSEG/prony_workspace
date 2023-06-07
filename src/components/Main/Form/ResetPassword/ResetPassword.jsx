import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import './ResetPassword.scss';

const ResetPassword = ({ state }) => {
	const [email, setEmail] = useState('');

	return (
		<div className='reset-pass'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper >
				<p className="reset-pass__subtitle">
					{state.subtitle}
				</p>
				<InputFormContainer
					style={{ margin: 0 }}
					name={state.input.title}
					title={state.input.title}
					ph={state.input.ph}
					type={state.input.type}
					value={email}
					setValue={setEmail}
				/>
				<ButtonWrapperForm style={{
					marginTop: '29px',
					flexDirection: 'column-reverse',
					gap: '30px'
				}}>
					<ClearBtn
						style={{
							width: 'max-content',
							color: '#1565C0'
						}}
						title='Login to your account' />
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

export default ResetPassword;