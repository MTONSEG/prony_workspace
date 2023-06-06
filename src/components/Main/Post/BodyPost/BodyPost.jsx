import React, { useState } from 'react';
import './BodyPost.scss';
import LikeRoadmapWS from '../../Workspace/RoadmapWorkspace/ItemRoadmapWorkspace/LikeRoadmapWS/LikeRoadmapWS';
import Status from '../../../UI/Status/Status';
import { MessageIcon } from '../../../UI/SVGIcons/SVGIcons';
import TagItem from '../../../UI/TagItem/TagItem';

const BodyPost = ({ state, style }) => {

	return (
		<article className='body-post' style={style ? style : {}}>
			<div className="body-post__header">
				<LikeRoadmapWS amount={state.likes} style={{
					top: '50%',
					transform: 'translateY(-50%)'
				}} />
				<img src={state.photo} alt={state.name} className="body-post__photo" />
				<p className="body-post__name">{state.name}</p>
				<p className="body-post__time">{state.time}</p>
			</div>
			<h1 className="body-post__title">{state.title}</h1>
			<p className="body-post__text">{state.text}</p>
			<img src={state.image} alt="image" className="body-post__image" />
			<div className="body-post__footer">
				<Status status={state.status} />
				<div className="body-post__comments">
					<MessageIcon />
					<span className='body-post__comments-value'>{state.comments}</span>
				</div>
				<div className="body-post__tag-list">
					{
						state.tagList.map(el => (
							<TagItem
								key={el.id}
								title={el.title}
								style={{ background: el.color }}
							/>
						))
					}
				</div>
			</div>
		</article>
	)
}

export default BodyPost;