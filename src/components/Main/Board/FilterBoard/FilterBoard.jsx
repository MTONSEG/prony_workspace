import React, { useState } from "react";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import SearchForm from "../../../UI/Forms/SearchForm/SearchForm";
import SelectFormContainer from "../../../UI/Forms/SelectFormContainer/SelectFormContainer";
import './FilterBoard.scss';

const FilterBoard = ({ state, style }) => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div
			style={style ? style : {}}
			className='filter-board'>
			<div className="filter-board__search">
				<SearchForm
					ph='Search'
					value={searchValue}
					setValue={setSearchValue}
				/>
			</div>
			<div className="filter-board__select-list">
				{
					state.selects.map(el => (
						<SelectFormContainer
							key={el.id}
							def={el.default}
							title={el.title}
							list={el.list} />
					))
				}
			</div>
			<ClearBtn
				style={{
					maxWidth: 'max-content',
					margin: '0 0 0 auto'
				}}
				title={state.titleBtn}
			/>
		</div>
	)
}

export default FilterBoard;