import React from 'react';
import './VotersPost.scss';


const VotersPost = ({ state, style }) => {

	return (
		<div className='voters-post' style={style ? style : {}}>
			<p className="voters-post__text">{state.title}</p>
			<ul className="voters-post__list">
				{
					state.list.map(el => (
						<li key={el.id} className="voters-post__item">
							<img
								src={el.image}
								alt="image"
								className="voters-post__image" />
						</li>
					))
				}
			</ul>
			<p className="voters-post__more">{state.more}</p>
		</div>
	)
}

export default VotersPost;