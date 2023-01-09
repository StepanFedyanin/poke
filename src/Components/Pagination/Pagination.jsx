import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Pagination.scss'
import { changePagination } from '../../Redux/Slice/ToolkitSlice';
import { getPokiList } from '../../API/GetPokedexList';

function Pagination() {
	const dispath = useDispatch();
	const pagination = useSelector(state => state.pokidex.params.offset);
	const changeList = (value) => {
		dispath(changePagination(value));
	}
	return (
		<div className="pogination">
			<div className="pogination__item">
				<button className='pogination__item--btn' onClick={() => changeList(-9)}></button>
			</div>
			<div className="pogination__item">
				<button className='pogination__item--btn'></button>
			</div>
			<div className="pogination__item">
				<button className='pogination__item--btn' onClick={() => changeList(9)}></button>
			</div>
		</div>
	)
}

export default Pagination