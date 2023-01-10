import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import './FilterMenu.scss'
function FilterMenu() {
	const pagination = useSelector(state => state.pokidex.params.offset);
	const limit = useSelector(state => state.pokidex.params.limit);
	const pokedexCategory = useSelector(state => state.pokidex.category.categoryListTitle);
	const [filterShow, setFilterShow] = useState(false);
	useEffect(() => {
		filterShow ?
			document.body.style = 'overflow-y: hidden;'
			:
			document.body.style = 'overflow: none;'
	}, [filterShow])
	return (
		<div className='FilterMenu'>
			<div className="FilterMenu__title">
				<button
					onClick={() => filterShow ? setFilterShow(false) : setFilterShow(true)}
					className='FilterMenu__title--btn'
				>Filter</button>
			</div>
			<div
				onClick={() => setFilterShow(false)}
				className={filterShow ? "FilterMenu__list show" : "FilterMenu__list"}
			>
				<DropdownMenu
					title="All Category"
					params={{
						superstructure: 'list',
						meaning: pokedexCategory,
						offset: pagination,
						limit: limit
					}}
				/>
			</div>
		</div>
	)
}

export default FilterMenu