import React, { useState } from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import Button from "../../../UI/Buttons/Button";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import UploadBlock from '../../../UI/UploadBlock/UploadBlock';
import FormWrapper from "../FormWrapper/FormWrapper";
import './AvatarScreen.scss';

const AvatarScreen = ({ state }) => {

	return (
		<div className='avatar'>
			<BigTitle>
				{state.title}
			</BigTitle>
			<FormWrapper >
				<p className="avatar__subtitle">
					{state.subtitle}
				</p>
				<div className="avatar__body">
					<img src={state.photo} alt={state.title} className="avatar__image" />
					<UploadBlock />
				</div>
				<ButtonWrapperForm style={{
					marginTop: '29px',
					justifyContent: 'center',
					gap: '28px'
				}}>
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

export default AvatarScreen;