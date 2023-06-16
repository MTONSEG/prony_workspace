import React, { useState } from "react";
import { paymentCl } from "../../../store";
import './PaymentClient.scss';
import { Route, Routes } from "react-router-dom";
import ListPaymentClient from "./ListPaymentClient/ListPaymentClient";
import AddPaymentClient from "./AddPaymentClient/AddPaymentClient";

const PaymentClient = () => {
	const [state, setState] = useState(paymentCl);
	const [nameValue, setNameValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [emailValue, setEmailValue] = useState('');

	return (
		<Routes>
			<Route path="/" element={<ListPaymentClient
				state={state} setState={setState}
			/>} />
			<Route path="/add" element={<AddPaymentClient
				state={state} setState={setState}
			/>} />
		</Routes>
	)
}

export default PaymentClient;