import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import FormWrapper from "../FormWrapper/FormWrapper";
import './Profile.scss';

const Profile = ({state}) => {
	const [name, setName] = useState('');
	const [lasName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<div className='profile'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper style={{ maxWidth: '444px' }}>
				<InputFormContainer
					name={state.current.title}
					title={state.current.title}
					ph={state.current.ph}
					type={state.current.type}
					value={name}
					setValue={setName}
				/>
				<InputFormContainer
					name={state.new.title}
					title={state.new.title}
					ph={state.new.ph}
					type={state.new.type}
					value={lasName}
					setValue={setLastName}
				/>
				<InputFormContainer
					style={{ margin: 0 }}
					name={state.repeat.title}
					title={state.repeat.title}
					ph={state.repeat.ph}
					type={state.repeat.type}
					value={email}
					setValue={setEmail}
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

export default Profile;