import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import PokedexContent from '../Components/PokedexContent/PokedexContent'


function Pokedex() {
	return (
		<div className='wrapper'>
			<Header />
			<PokedexContent />
			<Footer />
		</div>
	)
}

export default Pokedex