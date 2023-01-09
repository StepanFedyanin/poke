import React, { useState } from 'react';
import './Header.scss';
import logo from '../../Resurces/Image/logo.svg'
function Header() {
	const [burger, setBurger] = useState(false)
	return (
		<div className={burger ? 'header' : 'header back'} onClick={() => setBurger(true)}>
			<div className="header__wrapper" onClick={(e) => e.stopPropagation()}>
				<div className={burger ? "header__container" : 'header__container show'}>
					<div className={burger ? "header__logo" : 'header__logo size'}>
						<img src={logo} alt="" />
					</div>
					<div className={burger ? "header__content" : "header__content show"}>
						<nav className='header__nav'>
							<ul className='header__nav--list'>
								<li className='header__list--item'>
									{/* <NavLink to="/HomeContent" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}> */}
									Home
									{/* </NavLink> */}
								</li>
								<li className='header__list--item'>
									{/* <NavLink to="/PokedexContent" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}> */}
									Pokédex
									{/* </NavLink> */}
								</li>
								<li className='header__list--item'>
									{/* <NavLink to="/Varieties" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}> */}
									Varieties
									{/* </NavLink> */}
								</li>
							</ul>
						</nav>
					</div>
					<div className={burger ? 'header__burger' : "header__burger hide"} onClick={() => burger ? setBurger(false) : setBurger(true)}>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header