import React, { useState } from "react";
import './App.scss';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

const App = ({ store }) => {
	let [state, setState] = useState(store);

	return (
		<div className="wrapper">
			<Header state={state.header} />
			<Main />
			<Footer state={state.footer} />
		</div>
	)
}

export default App;
