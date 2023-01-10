import React, { useEffect, useState } from 'react';
import './Header.scss';
import logo from '../../Resurces/Image/logo.svg'
import { NavLink } from 'react-router-dom';
function Header() {
	const [burger, setBurger] = useState(false)
	useEffect(() => {
		burger ?
			document.body.style = 'overflow-y: hidden;'
			:
			document.body.style = 'overflow: none;'
	}, [burger])
	return (
		<div className={burger ? 'header back' : 'header'} onClick={() => setBurger(false)}>
			<div className="header__wrapper" onClick={(e) => e.stopPropagation()}>
				<div className={burger ? "header__container show" : 'header__container'}>
					<div className={burger ? "header__logo size" : 'header__logo'}>
						<img src={logo} alt="" />
					</div>
					<div className={burger ? "header__content show" : "header__content"}>
						<nav className='header__nav'>
							<ul className='header__nav--list'>
								<li className='header__list--item'>
									<NavLink to="/poke/index" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
										Home
									</NavLink>
								</li>
								<li className='header__list--item'>
									<NavLink to="/poke/pokedex" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
										Pokédex
									</NavLink>
								</li>
								<li className='header__list--item'>
									<NavLink to="/poke/varieties" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
										Varieties
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className={burger ? 'header__burger hide' : "header__burger"} onClick={() => burger ? setBurger(false) : setBurger(true)}>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header