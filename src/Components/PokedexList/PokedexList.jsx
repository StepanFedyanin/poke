import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import PokedexCard from '../PokedexCard/PokedexCard'
import './PokedexList.scss'
function PokedexList({ list }) {
	const loading = useSelector(state => state.pokidex.loading)
	return (
		<div className='Pokedex__list'>
			{
				list.length == 0 || loading == true ?
					<Loading />
					:
					list.map(card =>
						<PokedexCard
							key={card.name}
							id_card={card.id}
							img={card.sprites.other.home.front_default}
							name={card.name}
							attack={card.stats[4].base_stat}
							defanse={card.stats[3].base_stat}
							descriptiont={card.types} />
					)
			}

		</div>
	)
}

export default PokedexList