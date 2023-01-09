import React from 'react'
import './Modifiers.scss'
function Modifiers({ type__name }) {
	return (
		<div className={'poki__type--item' + " " + type__name}>
			<p className='poki__type--text'>{type__name}</p>
		</div>
	)
}

export default Modifiers