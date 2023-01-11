import React from 'react'
import { NavLink } from 'react-router-dom'
import CastomButton from '../../Components/UI/CastomButton/CastomButton'
import Team_Rocket from '../../Resurces/Image/Team_Rocket.png'
import './Error.scss'
function Error() {
	return (
		<div className='PageNoFind'>
			<div className="PageNoFind__container">
				<div className="PageNoFind__container--cover">
					<img src={Team_Rocket} alt="" />
				</div>
				<div className="PageNoFind__container--info">
					<div className="PageNoFind__container--error">
						<p className="PageNoFind__error--text">
							The rocket team <span>has won this time.</span>
						</p>
					</div>
					<div className="PageNoFind__error--link">
						<NavLink to="/poke/index" >
							<CastomButton color='#F2CB07' boxShadow="inset 0px -9px 0px rgba(0, 0, 0, 0.18)">Return</CastomButton>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Error