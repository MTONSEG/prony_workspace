import React, { useState } from "react";
import { Link } from "react-router-dom";
import './PopupUserMenu.scss';

const PopupUserMenu = ({ list, active, closePopupHandler, onOutClickHandler }) => {

	const onClickHandler = (type) => {
		if (type === 'logout') {
			onOutClickHandler();
			closePopupHandler();
		}
	}

	return (
		<ul className={`user-menu ${active ? 'active' : ''}`}>
			{list.map(el => (
				<li key={el.id} className="user-menu__item">
					<Link
						to={el.url}
						onClick={() => { onClickHandler(el.type) }}
						className="user-menu__link">
						{el.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default PopupUserMenu;