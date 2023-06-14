import React from "react";
import { Route, Routes } from "react-router-dom";
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import AddWorkspace from "./AddWorkspace/AddWorkspace";
import './Client.scss';
import DeleteWorkspace from "./DeleteWorkspace/DeleteWorkspace";
import EditWorkspace from "./EditWorkspace/EditWorkspace";
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
							<Route path='/edit' element={<EditWorkspace />} />
							<Route path='/add' element={<AddWorkspace />} />
							<Route path='/del' element={<DeleteWorkspace />} />
						</Routes>
					</main>
				</div>
			</div>
		</main>
	)
}

export default Client;