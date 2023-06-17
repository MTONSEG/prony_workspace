import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Breadcrumbs.scss';

const Breadcrumbs = props => {
	return (
		<div className='breadcrumbs'>
			<div className="container">
				<ul className="breadcrumbs__list">
					<Routes>
						<Route path="/" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/' className="breadcrumbs__item">Workspaces</Link>
							</>
						} />
						<Route path="add" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/' className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/' className="breadcrumbs__item">Add Workspace</Link>
							</>
						} />
						<Route path="edit" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Edit Workspace</Link>
							</>
						} />
						<Route path="del" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Delete Workspace</Link>
							</>
						} />
						<Route path="/change-pass" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Change password</Link>
							</>
						} />
						<Route path="/profile" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Profile</Link>
							</>
						} />
						<Route path="/social" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Social accounts</Link>
							</>
						} />
						<Route path="/avatar" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Avatar</Link>
							</>
						} />
						<Route path="/payment" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Payment Methods</Link>
							</>
						} />
						<Route path="/payment/add" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/payment'className="breadcrumbs__item">Payment Methods</Link>
								<Link to='/client/'className="breadcrumbs__item">Add Payment Methods</Link>
							</>
						} />
						<Route path="/billing" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Billing Plan</Link>
							</>
						} />
						<Route path="/billing-history" element={
							<>
								<Link to='/client' className="breadcrumbs__item">Client</Link>
								<Link to='/client/'className="breadcrumbs__item">Workspaces</Link>
								<Link to='/client/'className="breadcrumbs__item">Billing History</Link>
							</>
						} />
					</Routes>

				</ul>
			</div>
		</div>
	)
}

export default Breadcrumbs;