import React, { useState } from "react";
import './PageNotFound.scss';
import Button from "../../UI/Buttons/Button";
import { notFoundPage } from "../../../store";

const PageNotFound = (props) => {
	const [state, setState] = useState(notFoundPage);

	return (
		<div className="not-found">
			<h1 className="not-found__title">{state.title}</h1>
			<img className="not-found__image" src={state.image} alt="Page not found" />
			<p className="not-found__text">{state.text}</p>
			<Button
				url={state.btn.url}
				style={{
					margin: '0 auto',
				}}
			>
				{state.btn.title}
			</Button>
		</div>
	)
}

export default PageNotFound;