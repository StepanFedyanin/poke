import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokiList } from '../../API/GetPokedexList'
import { getCategory, GetCategoryPoke, newListCategory } from '../../API/GetParamsPokedex'
import PokedexList from '../PokedexList/PokedexList'
import Serch from '../UI/Serch/Serch'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import './PokedexContent.scss'
import { changeList, changeLoading } from '../../Redux/Slice/ToolkitSlice'
import ViewingPoke from '../ViewingPoke/ViewingPoke'
import Pagination from '../Pagination/Pagination'
import FilterMenu from '../FilterMenu/FilterMenu'
function PokedexContent() {
	const dispatch = useDispatch()
	const pagination = useSelector(state => state.pokidex.params.offset);
	const pokedexList = useSelector(state => state.pokidex.pokiList);
	const CategoryChouse = useSelector(state => state.pokidex.category.categoryWork);
	const params = useSelector(state => state.pokidex.params);
	const pokedexCategoryPoke = useSelector(state => state.pokidex.category.categoryListId);
	const ViewingModalLoading = useSelector(state => state.pokidex.ViewingModalPoke.loading);

	useEffect(() => {
		dispatch(getPokiList(pagination))
		dispatch(getCategory())
	}, [])
	useEffect(() => {
		CategoryChouse ?
			newListCategory(pokedexCategoryPoke, params, dispatch)
			:
			dispatch(getPokiList(pagination));
		dispatch(changeLoading(true))
	}, [pagination])
	return (
		<div className='Pokidex__container'>
			<div className="PokedexContent__title">
				<h1 className="PokedexContent__title--style">800 <span>Pokemons</span> for you to choose your favorite</h1>
			</div>
			<div className="PokedexContent__filter">
				<div className="PokedexContent__filter--serch">
					<Serch placeholder="name or id of the pokemon..." />
				</div>
				<div className="PokedexContent__filter--dropdown">
					<FilterMenu />
				</div>
			</div>
			<PokedexList list={pokedexList} />
			<Pagination />
			{
				ViewingModalLoading ?
					< ViewingPoke />
					:
					null

			}
		</div>
	)
}

export default PokedexContent