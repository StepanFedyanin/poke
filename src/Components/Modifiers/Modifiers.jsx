import React from 'react';
import './Modifiers.scss';
import '../../Style/ColorsType.scss'
function Modifiers({ type__name }) {
	return (
		<div className={'poki__type--item' + " " + "modifiers-" + type__name}>
			<p className='poki__type--text'>{type__name}</p>
		</div>
	)
}

export default Modifiers