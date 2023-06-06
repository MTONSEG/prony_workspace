import React from "react";
import TagItem from "../../../UI/TagItem/TagItem";
import './ListChangelog.scss';

const ListChangelog = ({ state, style }) => {

	return (
		<ul style={style ? style : {}} className='list-changelog'>
			{state.map(el => (
				<li className="list-changelog__item" key={el.id}>
					<h1 className="list-changelog__title">{el.title}</h1>
					<TagItem
						title={el.labelTitle}
						style={{
							background: el.labelBg,
							width: 'max-content',
							margin: '0 0 19px'
						}} />

					<div className="list-changelog__body">
						<img src={el.photo} alt={el.name} className="list-changelog__photo" />
						<div className="list-changelog__info">
							<div className="list-changelog__header-info">
								<p className="list-changelog__name">{el.name}</p>
								<p className="list-changelog__date">{el.date}</p>
							</div>
							<p className="list-changelog__text">{el.text}</p>
						</div>
					</div>
				</li>
			))

			}
		</ul>
	)
}

export default ListChangelog;