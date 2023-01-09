import axios from "axios"
import { changeModalLoading, changeModalPoke } from "../Redux/Slice/ToolkitSlice"

export const getPokeModal = (id_poke) => {
	return function (dispath) {
		axios.get('https://pokeapi.co/api/v2/pokemon/' + id_poke)
			.then(response => dispath(changeModalPoke(response.data)))
			.then(() => dispath(changeModalLoading(true)))
	}
}