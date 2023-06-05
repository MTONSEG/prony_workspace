import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './Main.scss';

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<Routes>
					<Route path='/' element={<></>} />
				</Routes>
			</div>
		</main>
	)
}

export default Main;