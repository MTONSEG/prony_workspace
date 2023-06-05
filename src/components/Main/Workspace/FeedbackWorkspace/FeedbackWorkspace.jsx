import React from "react";
import BigTitle from "../../../UI/BigTitle/BigTitle";
import './FeedbackWorkspace.scss';
import ItemFeedbackWorkspace from "./ItemFeedbackWorkspace/ItemFeedbackWorkspace";

const FeedbackWorkspace = ({ state }) => {

	let listItems = state.list.map(el => (
		<ItemFeedbackWorkspace
			key={el.id}
			title={el.title}
			amount={el.amount}
		/>
	))

	return (
		<div className='feedback-ws'>
			<BigTitle mb='20px'>{state.title}</BigTitle>
			<ul className="feedback-ws__list">
				{listItems}
			</ul>
		</div>
	)
}

export default FeedbackWorkspace;