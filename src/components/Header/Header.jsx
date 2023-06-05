import React from "react";
import { Link } from "react-router-dom";
import { BoardsIcon, ChangelogIcon, LoginIcon, LogoIcon } from "../UI/SVGIcons/SVGIcons";
import './Header.scss';

const Header = ({ state }) => {
	return (
		<header className='header'>
			<div className="container">
				<div className='header__row'>
					<div className="header__logo">
						<LogoIcon />
					</div>
					<nav className='header__nav'>
						<Link className='header__link'>
							<BoardsIcon />
							<span className='header__text-link'>{state.board}</span>
						</Link>
						<Link className='header__link'>
							<ChangelogIcon />
							<span className='header__text-link'>{state.changelog}</span>
						</Link>
						<Link className='header__link'>
							<LoginIcon />
							<span className='header__text-link'>{state.login.title}</span>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;