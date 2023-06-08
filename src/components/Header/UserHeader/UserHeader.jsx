import React, { useState } from "react";
import { MenuBtnIcon } from "../../UI/SVGIcons/SVGIcons";
import './UserHeader.scss';

const UserHeader = ({ photo, name, onMenuBtnClick }) => {
	return (
		<div className='user'>
			<img
				src={photo}
				alt={name}
				className="user__avatar" />
			<p className="user__name">{name}</p>
			<button className="user__menu-btn"
				onClick={onMenuBtnClick}>
				<MenuBtnIcon />
			</button>
		</div>
	)
}

export default UserHeader;