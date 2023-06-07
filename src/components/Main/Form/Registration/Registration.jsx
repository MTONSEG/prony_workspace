import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import CheckboxForm from "../../../UI/Forms/CheckboxForm/CheckboxForm";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import SocialEnterBlock from "../SocialEnterBlock/SocialEnterBlock";
import './Registration.scss';

const Registration = ({ state, soc }) => {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [repeatPass, setRepeatPass] = useState('');

	return (
		<div className='form'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper >
				<InputFormContainer
					name={state.name.title}
					title={state.name.title}
					ph={state.name.ph}
					type={state.name.type}
					value={name}
					setValue={setName}
				/>
				<InputFormContainer
					name={state.lastName.title}
					title={state.lastName.title}
					ph={state.lastName.ph}
					type={state.lastName.type}
					value={lastName}
					setValue={setLastName}
				/>
				<InputFormContainer
					name={state.email.title}
					title={state.email.title}
					ph={state.email.ph}
					type={state.email.type}
					value={email}
					setValue={setEmail}
				/>
				<InputFormContainer
					name={state.newPass.title}
					title={state.newPass.title}
					ph={state.newPass.ph}
					type={state.newPass.type}
					view={true}
					value={pass}
					setValue={setPass}
				/>
				<InputFormContainer
					name={state.repeatPass.title}
					title={state.repeatPass.title}
					ph={state.repeatPass.ph}
					type={state.repeatPass.type}
					view={true}
					value={repeatPass}
					setValue={setRepeatPass}
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
				<SocialEnterBlock state={soc} />
			</FormWrapper>
		</div>
	)
}

export default Registration;