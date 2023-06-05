import React from "react";
import { Link } from "react-router-dom";
import './ItemTopFooter.scss';

const ItemTopFooter = ({ title, list }) => {
	return (
		<li className='item-top-footer'>
			<h1 className="item-top-footer__title">{title}</h1>
			<ul className="item-top-footer__list">
				{
					list.map(el => (
						<li
							key={el.id}
							className='item-top-footer__item'>
							<Link to={el.link} className='item-top-footer__link'>
								{el.title}
							</Link>
						</li>
					))
				}

			</ul>
		</li>
	)
}

export default ItemTopFooter;