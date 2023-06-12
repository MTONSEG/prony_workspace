import React from "react";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import './Client.scss';
import Navbar from "./Navbar/Navbar";

const Client = props => {
	return (
		<main className="client">
			<Breadcrumbs />
			<div className="container">
				<div className="client__row">
					<Navbar />
					<div className="client__body">
						<Routes>
							<Route path='/' element={<div></div>} />
						</Routes>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Client;