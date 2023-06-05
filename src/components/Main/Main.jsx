import React from "react";
import { Route, Routes } from "react-router-dom";
import './Main.scss';

const Workspace = React.lazy(() => import('./Workspace/Workspace.jsx'));

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Workspace />} />
				</Routes>
			</div>
		</main>
	)
}

export default Main;