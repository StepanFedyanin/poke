import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import './ProgressBar.scss'
function ProgressBar({ bg = false, title, styleName, percent }) {
	const refProgressBar = useRef(null)
	useEffect(() => {
		refProgressBar.current.style.width = (percent / 500 * 100) + '%';
	}, [title, percent])
	return (
		<div className="progress">
			<div className="progress__title">
				<p className={bg ? 'progress__title--dark' : 'progress__title--style'}>{title}</p>
			</div>
			<div className="progress__meaning">
				<p className={bg ? 'progress__meaning--dark' : 'progress__meaning--number'}>{percent}</p>
			</div>
			<div className="progress__bar">
				<div className={'progress__bar' + "--" + styleName} ref={refProgressBar}></div>
			</div>
		</div>


	)
}

export default ProgressBar