import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GetCategoryPoke } from '../../../API/GetParamsPokedex';
import { getPokiList } from '../../../API/GetPokedexList';
import { changeCategoryWork, changeLoading, changePagination } from '../../../Redux/Slice/ToolkitSlice';
import './DropdownMenu.scss'
const ChangeDropMenu = (params) => {
	const dispatch = useDispatch()
	switch (params.superstructure) {
		case 'list':
			return (
				<div className='dropdown__list--items'>
					<li key="allCetegory" className="dropdown__list--item" onClick={() => {
						dispatch(changeLoading(false))

						dispatch(getPokiList(params.offset));
						dispatch(changeCategoryWork(false));
						dispatch(changePagination(0));

					}}>
						<input className="dropdown__item--input" type="radio" name="radio" id="allCetegory" />
						<label className="dropdown__item--label" htmlFor="allCetegory">All</label>
					</li>
					{
						params.meaning.length != 0 ?
							params.meaning.map(item =>
								<li key={item} className="dropdown__list--item" onClick={() => {
									dispatch(GetCategoryPoke(item, { offset: params.offset, limit: params.limit }));
									dispatch(changeLoading(true))
								}}>
									<input className="dropdown__item--input" type="radio" name="radio" id={item} />
									<label className="dropdown__item--label" htmlFor={item}>{item}</label>
								</li>
							) : null
					}
				</div>
			)
		default:
			break;
	}
}
function DropdownMenu({ params, title }) {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<div className='dropdown' onClick={(e) => e.stopPropagation()}>
			<div className="dropdown__btn">
				<button
					className='dropdown__btn--style'
					onClick={() => showDropdown ? setShowDropdown(false) : setShowDropdown(true)}
				>
					{title}
				</button>
			</div>

			<nav className={showDropdown ? 'dropdown__list--Show' : 'dropdown__list'}>
				<ul className='dropdown__list--nav'>
					{ChangeDropMenu(params)}
				</ul>
			</nav >
		</div >
	)
}

export default DropdownMenu