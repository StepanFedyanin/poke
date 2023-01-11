import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import IndexContent from '../Components/IndexContent/IndexContent'

function Index() {
	return (
		<div className='wrapper'>
			<Header />
			<IndexContent />
			<Footer position={true} />
		</div>
	)
}

export default Index