import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LogoFooterIcon, TwitterIcon, YoutubeIcon } from "../UI/SVGIcons/SVGIcons";
import './Footer.scss';
import ItemTopFooter from "./ItemTopFooter/ItemTopFooter";

const Footer = ({ state }) => {

	let listItems = state.list.map((el, i) => (
		<ItemTopFooter
			key={i}
			title={el.title}
			list={el.list}
		/>
	));

	return (
		<footer className='footer'>
			<div className="footer__top top-footer">
				<div className="container">
					<div className="top-footer__row">
						<div className="top-footer__logo">
							<LogoFooterIcon />
						</div>
						<ul className="top-footer__list">
							{listItems}
						</ul>
					</div>
				</div>
			</div>
			<div className="footer__bottom bottom-footer">
				<div className="container">
					<div className="bottom-footer__row">
						<p className="bottom-footer__copy">
							© 2020 Prony<span>|</span>All rights reserved
						</p>
						<div className="bottom-footer__right-block">
							<div className="bottom-footer__privacy">
								<Link className='bottom-footer__privacy-link'>
									Privacy policy
								</Link>
								<span>|</span>
								<Link className='bottom-footer__privacy-link'>
									Terms of service
								</Link>
							</div>
							<div className="bottom-footer__social">
								<Link className='bottom-footer__social-item'>
									<FacebookIcon />
								</Link>
								<Link className='bottom-footer__social-item'>
									<InstagramIcon />
								</Link>
								<Link className='bottom-footer__social-item'>
									<TwitterIcon />
								</Link>
								<Link className='bottom-footer__social-item'>
									<YoutubeIcon />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;