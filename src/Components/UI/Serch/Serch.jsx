import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './Serch.scss'
import serchIcon from '../../../Resurces/Image/serchIcon.png'
import { getPokeModal } from '../../../API/GetPokeModal'
function Serch({ placeholder }) {
	const dispatch = useDispatch()
	const inputSerch = useRef('*')
	const showSerchContent = (keyCode = 13) => {
		if (keyCode == 13 && inputSerch.current.value != '') {
			dispatch(getPokeModal(inputSerch.current.value))
		}
	}
	return (
		<div className="serch">
			<div className="serch__input">
				<input className='serch__input--style' type="text" placeholder={placeholder} ref={inputSerch} onKeyDown={(e) => showSerchContent(e.keyCode)} />
			</div>
			<div className="serch__btn">
				<button onClick={() => showSerchContent()}>
					<img src={serchIcon} alt="" />
				</button>
			</div>
		</div>)
}

export default Serch