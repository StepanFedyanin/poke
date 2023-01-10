import axios from "axios"
import { useSelector } from "react-redux"
import { changeList, changeLoading } from "../Redux/Slice/ToolkitSlice"

export const getPokiList = (pagination) => {
	return function (dispath) {
		axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit: 9,
				offset: pagination
			}
		})
			.then(response => getPoki(response.data))
			.then(pokeList => dispath(changeList(pokeList)))
			.then(() => dispath(changeLoading(false)))
	}
}
const getPoki = async (pokiList) => {
	const listPoki = []
	for (const poki of pokiList.results) {
		const response = await axios.get(poki.url);
		listPoki.push(response.data);
	}
	return listPoki
}