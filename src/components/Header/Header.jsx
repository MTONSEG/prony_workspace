import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BoardsIcon, ChangelogIcon, LoginIcon, LogoIcon } from "../UI/SVGIcons/SVGIcons";
import { userMenu } from "../../store";
import './Header.scss';
import PopupUserMenu from "./PopupUserMenu/PopupUserMenu";
import UserHeader from "./UserHeader/UserHeader";

const Header = ({ state }) => {
	const [userState, setUserState] = useState(userMenu)
	const [login, setLogin] = useState(true);
	const [activePopup, setActivePopup] = useState(false);

	const onLogInOutClickHandler = () => { setLogin(!login) };
	const onMenuBtnClickHandler = () => { setActivePopup(!activePopup) };

	return (
		<header className='header'>
			<div className="container">
				<div className='header__row'>
					<Link to='/' className="header__logo">
						<LogoIcon />
					</Link>
					<nav className='header__nav'>
						<Link to="/board" className='header__link'>
							<BoardsIcon />
							<span className='header__text-link'>{state.board}</span>
						</Link>
						<Link to="/changelog" className='header__link'>
							<ChangelogIcon />
							<span className='header__text-link'>{state.changelog}</span>
						</Link>
						{login
							? <UserHeader
								name={userState.name}
								photo={userState.photo}
								onMenuBtnClick={onMenuBtnClickHandler}
							/>
							: <>
								<Link className='header__link'
									onClick={onLogInOutClickHandler}>
									<LoginIcon />
									<span className='header__text-link'>{state.login.title}</span>
								</Link>
							</>}
					</nav>
					<PopupUserMenu
						list={userState.list}
						active={activePopup}
						onOutClickHandler={onLogInOutClickHandler}
						closePopupHandler={onMenuBtnClickHandler} />
				</div>
			</div>
		</header>
	)
}

export default Header;