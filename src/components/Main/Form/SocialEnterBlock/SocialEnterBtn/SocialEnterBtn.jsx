import React from "react";
import './SocialEnterBtn.scss';

const SocialEnterBtn = ({ icon, title }) => {


	function getAlt(title) {
		let arr = title.split(' ');
		return arr[arr.length - 1];
	}

	return (
		<button className='social-enter-btn'>
			<img src={icon} alt={getAlt(title)} className="social-enter-btn__icon" />
			<span className="social-enter-btn__text">
				{title}
			</span>
		</button>
	)
}

export default SocialEnterBtn;