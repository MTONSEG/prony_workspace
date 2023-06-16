import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Client from "./Client/Client";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const App = ({ store }) => {
	let [state, setState] = useState(store);

	return (
		<div className="wrapper">
			<Header state={state.header} />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/client/*" element={<Client />} />
			</Routes>
			<Footer state={state.footer} />
		</div>
	)
}

export default App;
