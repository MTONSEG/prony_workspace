import React from "react";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import './Client.scss';
import MainClient from "./MainClient/MainClient";
import Navbar from "./Navbar/Navbar";

const Client = props => {
	return (
		<main className="client">
			<Breadcrumbs />
			<div className="container">
				<div className="client__row">
					<Navbar />
					<main className="client__body">
						<Routes>
							<Route path='/' element={<MainClient />} />
						</Routes>
					</main>
				</div>
			</div>
		</main>
	)
}

export default Client;