import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Pagination.scss'
import { changeLoading, changePagination } from '../../Redux/Slice/ToolkitSlice';

function Pagination() {
	const dispath = useDispatch();
	const pagination = useSelector(state => state.pokidex.params.offset);
	const changeList = (value) => {
		if (pagination + value > 0 || pagination + value == 0) {
			console.log('da');
			dispath(changePagination(value));
			dispath(changeLoading(true))
		}
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