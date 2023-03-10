import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokeModal } from '../../API/GetPokeModal';
import Characteristics from '../Characteristics/Characteristics';
import Modifiers from '../Modifiers/Modifiers';
import './PokedexCard.scss';
import '../../Style/ColorsType.scss';
import loadingCardGif from '../../Resurces/GiF/loadingCardGif.png';
function PokedexCard({ id_card, img, name, attack, defanse, descriptiont }) {
	const dispatch = useDispatch();
	const [loadUrl, setLoadUrl] = useState('')
	useEffect(() => {
		fetch(img)
			.then(response => response.blob())
			.then((img) => { setLoadUrl(URL.createObjectURL(img)) })
	}, [img])
	return (
		<div className='PokiCard' onClick={() => dispatch(getPokeModal(id_card))}>
			<div className="PokiCard__info">
				<div className="PokiCard__name">
					<p className='PokiCard__name--text'>{name}</p>
				</div>
				<div className="PokiCard__characteristics">
					<Characteristics title="Attack" meaning={attack} />
					<Characteristics title="Defanse" meaning={defanse} />
				</div>
				<div className="poki__type">
					{
						descriptiont.map(desc =>
							<Modifiers key={name + desc.type.name} type__name={desc.type.name} />
						)
					}
				</div>
			</div>
			<div className={'PokiCard__info__cover' + " " + 'card-' + descriptiont[0].type.name}>
				<div className="PokiCard__info__img">
					{
						loadUrl ?
							<img src={loadUrl} alt="cover" />
							:
							<img src={loadingCardGif} alt="cover" />
					}
				</div>
			</div>
		</div>
	)
}

export default PokedexCard