import React from 'react';
import MessagePostItem from './MessagePostItem/MessagePostItem';
import './MessagesPost.scss';

const MessagesPost = ({ className, state }) => {

	let messageList = state.map(el => (
		<MessagePostItem
			key={el.id}
			photo={el.photo}
			name={el.name}
			message={el.message}
			amountLikes={el.amountLikes}
			date={el.date}
			privacy={el.privacy}
			merge={el.merge}
			reply={el.reply}
			image={el.image}
		/>
	))

	return (
		<div className={`messages-post ${className ? className : ''}`}>
			{messageList}
		</div>
	)
}

export default MessagesPost;