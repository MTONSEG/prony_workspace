import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../ContainerClient/ContainerClient";
import InputFormContainer from '../../UI/Forms/InputFormContainer/InputFormContainer';
import ButtonWrapperForm from '../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm';
import ClearBtn from '../../UI/Buttons/ClearBtn/ClearBtn';
import Button from '../../UI/Buttons/Button';
import { changePassWs } from "../../../store";
import './ChangePassWorkspace.scss';

const ChangePassWorkspace = () => {
	const [state, setState] = useState(changePassWs);
	const [currentPass, setCurrentPass] = useState('');
	const [newPass, setNewPass] = useState('');
	const [repeatNewPass, setRepeatNewPass] = useState('');

	return (
		<>
			<BigTitleClient>
				{state.title}
			</BigTitleClient>

			<ContainerClient style={{maxWidth: '444px'}}>
				<InputFormContainer
					name={state.current.title}
					title={state.current.title}
					ph={state.current.ph}
					value={currentPass}
					setNameValue={setCurrentPass}
				/>
				<InputFormContainer
					name={state.new.title}
					title={state.new.title}
					ph={state.new.ph}
					value={newPass}
					setNameValue={setNewPass}
				/>
				<InputFormContainer
					name={state.repeatNew.title}
					title={state.repeatNew.title}
					ph={state.repeatNew.ph}
					value={repeatNewPass}
					setNameValue={setRepeatNewPass}
				/>

				<ButtonWrapperForm client={true}>
					<ClearBtn
						blue={true}
						title='Cancel' />
					<Button>
						Delete
					</Button>
				</ButtonWrapperForm>
			</ContainerClient>
		</>
	)
}

export default ChangePassWorkspace;