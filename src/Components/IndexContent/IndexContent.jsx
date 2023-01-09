import React from 'react'
import { NavLink } from 'react-router-dom'
import CastomButton from '../UI/CastomButton/CastomButton'
import './IndexContent.scss'
function IndexContent() {
	return (
		<div className='homeContent'>
			<div className="homeContent__container">
				<div className="homeContent__content">
					<div className="homeContent__content--title">
						<h1 className='homeContent__title--style'>
							<span>Find</span> all your favorite <span>Pokemon</span>
						</h1>
					</div>
					<div className="homeContent__content--description">
						<p className='homeContent__description--style'>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
					</div>
					<div className="homeContent__content--button">
						<NavLink to="/poke/pokedex" >
							<CastomButton color='#73D677' boxShadow="inset 0px -9px 0px rgba(0, 0, 0, 0.18)">See pokemons</CastomButton>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IndexContent