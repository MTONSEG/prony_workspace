import React from "react";
import './SocialEnterBlock.scss';
import SocialEnterBtn from "./SocialEnterBtn/SocialEnterBtn";

const SocialEnterBlock = ({ state }) => {

	return (
		<div className='social-enter'>
			<h2 className="social-enter__title">
				{state.title}
			</h2>

			<ul className="social-enter__list">
				{state.list.map(el => (
					<SocialEnterBtn
						title={el.title}
						icon={el.icon}
					/>
				))}
			</ul>
		</div>
	)
}

export default SocialEnterBlock;