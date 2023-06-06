import React, { useState } from 'react';
import './MessViewPostButtons.scss';
import { MessageIcon, CloseRoundIcon, PrivateIcon, PublicIcon } from '../../../../../UI/SVGIcons/SVGIcons';

const MessViewPostButtons = ({ className, privacy, setPrivacy }) => {


	const onClickHandler = () => { setPrivacy(!privacy) }

	return (
		<ul className={`messages-buttons ${className ? className : ''}`
		}>
			<li className="messages-buttons__item">
				<MessageIcon />
				<span className='messages-buttons__text'>Reply</span>
			</li>
			<li className="messages-buttons__item">
				<CloseRoundIcon />
				<span className='messages-buttons__text'>Delete</span>
			</li>
			{privacy
				? <li className="messages-buttons__item private"
					onClick={onClickHandler}
				>
					<PrivateIcon />
					<span className='messages-buttons__text'>Private</span>
				</li>
				: <li className="messages-buttons__item"
					onClick={onClickHandler}
				>
					<PublicIcon />
					<span className='messages-buttons__text'>Public</span>
				</li>
			}
		</ul>
	)
}

export default MessViewPostButtons;