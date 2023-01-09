import React from 'react'
import './CastomButton.scss'
function CastomButton({ children, color, boxShadow }) {
	return (
		<button className="CastomButton" style={{ 'background': color, 'box-shadow': boxShadow }}>{children}</button>
	)
}

export default CastomButton