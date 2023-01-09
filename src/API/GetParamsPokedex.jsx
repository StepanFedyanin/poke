import axios from "axios"
import { useSelector } from "react-redux"
import { changeCategoryListId, changeCategoryListTitle, changeCategoryWork, changeList } from "../Redux/Slice/ToolkitSlice"

export const getCategory = (pagination) => {
	return function (dispath) {
		axios.get('https://pokeapi.co/api/v2/type')
			.then(response => getCategoryListTitle(response.data))
			.then(pokeList => dispath(changeCategoryListTitle(pokeList)))
	}
}
const getCategoryListTitle = async (pokiList) => {
	const listCategory = []
	for (const poki of pokiList.results) {
		await axios.get(poki.url)
			.then(response => response.data)
			.then(categoryTitle => listCategory.push(categoryTitle.name))
	}
	return listCategory
}

export const GetCategoryPoke = (category, params) => {
	return function (dispatch) {
		axios.get('https://pokeapi.co/api/v2/type/' + category)
			.then(response => getCategoryListPoke(response.data.pokemon))
			.then(list => dispatch(changeCategoryListId(list)))
			.then((item) => (newListCategory(item.payload, params, dispatch)))
			.then(() => dispatch(changeCategoryWork(true)))
	}

}
export const newListCategory = (pokedexCategoryPoke, params, dispatch) => {
	const newPokeCatygory = [];
	for (let index = params.offset, count = 0; count < params.limit; index++, count++) {
		newPokeCatygory.push(pokedexCategoryPoke[index]);
	}
	dispatch(changeList(newPokeCatygory))
}


const getCategoryListPoke = async (lsitId) => {
	const listCategoryPoke = [];
	for (const poke of lsitId) {
		await axios.get(poke.pokemon.url)
			// .then(response => console.log(response.data))
			.then(response => listCategoryPoke.push(response.data))
	}
	return listCategoryPoke;
} 