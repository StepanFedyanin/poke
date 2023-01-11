import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Characteristics from '../Characteristics/Characteristics';
import Modifiers from '../Modifiers/Modifiers';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import closeIcon from '../../Resurces/Image/closeIcon.svg';
import './ViewingPoke.scss';
import '../../Style/ColorsType.scss';
import loadingCardGif from '../../Resurces/GiF/loadingCardGif.png';
import { changeModalLoading } from '../../Redux/Slice/ToolkitSlice';

function ViewingPoke() {
	const dispath = useDispatch();
	const ViewingModalPoke = useSelector(state => state.pokidex.ViewingModalPoke.content);
	const ViewingModalLoading = useSelector(state => state.pokidex.ViewingModalPoke.loading);
	const style = ['ModalPoki'];
	if (ViewingModalLoading) {
		style.push('active');
	}

	if (ViewingModalLoading) {
		document.body.style = 'overflow-y: hidden;'

	}
	const [loadUrl, setLoadUrl] = useState('')
	useEffect(() => {
		fetch(ViewingModalPoke.sprites.other.home.front_default)
			.then(response => response.blob())
			.then((img) => { setLoadUrl(URL.createObjectURL(img)) })
	}, [ViewingModalPoke.sprites.other.home.front_default])
	return (
		<div className={style.join(' ')} onClick={() => {
			dispath(changeModalLoading(false));
			document.body.style = 'overflow: none;'
		}}>
			<div className="ModalPoki__container" onClick={(e) => e.stopPropagation()}>
				<div className="ModalPoki__hide">
					<button className='ModalPoki__hide--btn' onClick={() => {
						dispath(changeModalLoading(false));
						document.body.style = 'overflow: none;'
					}}>
						<img src={closeIcon} alt="" />
					</button>
				</div>
				<div className={"ModalPoki__container--content"}>
					{
						ViewingModalLoading ?
							<div className={'ModalPoki__content' + " " + 'modal-' + ViewingModalPoke.types[0].type.name}>
								<div className="ModalPoki__content--cover">
									<div className="ModalPoki__cover--photo">
										{
											loadUrl ?
												<img src={loadUrl} alt="" />
												:
												<img src={loadingCardGif} alt="" />


										}
									</div>
									<div className="ModalPoki__cover--modifiers">
										{
											ViewingModalPoke.types.map(desc =>
												<Modifiers key={ViewingModalPoke.id + "-" + desc.type.name} type__name={desc.type.name} />
											)
										}
									</div>
								</div>
								<div className={"ModalPoki__content--description" + ' ' + 'description-' + ViewingModalPoke.types[0].type.name}>
									<div className="ModalPoki__description--info">
										<div className="ModalPoki__info--name">
											<p className='ModalPoki__name--style'>{ViewingModalPoke.name}</p>
										</div>
										<div className="ModalPoki__info--generation">
											<div className="ModalPoki__generation--number">
												<p className='ModalPoki__generation--info'>Generation 1</p>
											</div>
											<div className="ModalPoki__generation--meaning">
												<p className='ModalPoki__meaning--id'>{ViewingModalPoke.id}</p>
											</div>
										</div>
									</div>
									<div className="ModalPoki__description--abilities">
										<div className="ModalPoki__abilities--title">
											<p className='ModalPoki__abilities--text'>Abilities</p>
										</div>
										<div className="ModalPoki__abilities--meaning">
											<p className='ModalPoki__abilities--dec'>
												{
													ViewingModalPoke.abilities.map((abi, index) => ViewingModalPoke.abilities.length - 1 != index ? (abi.ability.name + " - ") : (abi.ability.name))
												}
											</p>
										</div>
									</div>
									<div className="ModalPoki__description--lvl">
										<div className="ModalPoki__lvl--item">
											<ProgressBar title='healthy' styleName='green' percent={ViewingModalPoke.stats[2].base_stat} />
										</div>
										<div className="ModalPoki__lvl--item">
											<ProgressBar title='experience' styleName='gold' percent={ViewingModalPoke.base_experience} />
										</div>
									</div>
									<div className="ModalPoki__description--characteristics">
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Defanse" meaning={ViewingModalPoke.stats[2].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Attack" meaning={ViewingModalPoke.stats[1].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Sp Attack" meaning={ViewingModalPoke.stats[3].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Sp Defense" meaning={ViewingModalPoke.stats[4].base_stat} />
										</div>

									</div>
								</div>
							</div>
							:
							null
					}

				</div>
			</div>
		</div >
	)
}

export default ViewingPoke