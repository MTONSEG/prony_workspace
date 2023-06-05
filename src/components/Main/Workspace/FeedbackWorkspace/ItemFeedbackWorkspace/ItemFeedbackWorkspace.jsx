import React from "react";
import './ItemFeedbackWorkspace.scss';

const ItemFeedbackWorkspace = ({ title, amount }) => {
	return (
		<div className='item-feedback-wp'>
			<h2 className="item-feedback-wp__title">
				{title}
			</h2>
			<p className="item-feedback-wp__amount">
				{amount}
			</p>
		</div>
	)
}

export default ItemFeedbackWorkspace;