import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { formData } from "../../../store";
import AvatarScreen from "./AvatarScreen/AvatarScreen";
import ChangePassword from "./ChangePassword/ChangePassword";
import './Form.scss';
import Login from "./Login/Login";
import NewPassword from "./NewPassword/NewPassword";
import Profile from "./Profile/Profile";
import Registration from "./Registration/Registration";
import ResetPassword from "./ResetPassword/ResetPassword";

const Forms = () => {
	const [state, setState] = useState(formData);

	return (
		<div className='form'>
			<Routes>
				<Route path='change-pass' element={
					<ChangePassword state={state.changePass} />
				} />
				<Route path='reset-pass' element={
					<ResetPassword state={state.resetPass} />
				} />
				<Route path='new-pass' element={
					<NewPassword state={state.newPass} />
				} />
				<Route path='profile' element={
					<Profile state={state.profile} />
				} />
				<Route path='avatar' element={
					<AvatarScreen state={state.avatar} />
				} />
				<Route path='login' element={
					<Login state={state.login} soc={state.social} />
				} />
				<Route path='registration' element={
					<Registration state={state.reg} soc={state.social} />
				} />
			</Routes>
		</div>
	)
}

export default Forms;