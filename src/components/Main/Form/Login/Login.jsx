import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import CheckboxForm from "../../../UI/Forms/CheckboxForm/CheckboxForm";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import SocialEnterBlock from "../SocialEnterBlock/SocialEnterBlock";
import './Login.scss';

const Login = ({ state, soc }) => {
	const [currentPass, setCurrentPass] = useState('');
	const [newPass, setNewPass] = useState('');

	return (
		<div className='login'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper >
				<InputFormContainer
					name={state.login.title}
					title={state.login.title}
					ph={state.login.ph}
					value={currentPass}
					setValue={setCurrentPass}
				/>
				<InputFormContainer
					style={{ padding: '0 0 10px' }}
					name={state.pass.title}
					title={state.pass.title}
					ph={state.pass.ph}
					type={state.pass.type}
					view={true}
					value={newPass}
					setValue={setNewPass}
				/>

				<div className="login__checkbox">
					<CheckboxForm
						title='Keep me logged in'
						checked={true}
					/>
					<ClearBtn
						style={{
							width: 'max-content',
							color: '#1565C0'
						}}
						title='Forgot password'
					/>
				</div>

				<ButtonWrapperForm style={{
					margin: '29px 0 19px',
					flexDirection: 'column',
					gap: '25px'
				}}>
					<Button style={{
						width: '100%',
						maxWidth: '182px',
						textAlign: 'center'
					}}>
						Submit
					</Button>
					<div className='login__create-btn'>
						<span>
							Don’t have an account?
						</span>
						<ClearBtn
							style={{
								width: 'max-content',
								color: '#1565C0'
							}}
							title='Create a new account' />
					</div>
				</ButtonWrapperForm>
				<SocialEnterBlock state={soc}/>
			</FormWrapper>
		</div>
	)
}

export default Login;