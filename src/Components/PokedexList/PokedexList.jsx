import React from 'react'
import PokedexCard from '../PokedexCard/PokedexCard'
import './PokedexList.scss'
function PokedexList({ list }) {
	return (
		<div className='Pokedex__list'>
			{list.map(card =>
				<PokedexCard
					key={card.name}
					id_card={card.id}
					img={card.sprites.other.home.front_default}
					name={card.name}
					attack={card.stats[4].base_stat}
					defanse={card.stats[3].base_stat}
					descriptiont={card.types} />
			)}
		</div>
	)
}

export default PokedexList