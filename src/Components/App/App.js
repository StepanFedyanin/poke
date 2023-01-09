import React from "react";
import { Provider } from "react-redux";
import Pokedex from "../../Pages/Pokedex.jsx";
import { store } from "../../Redux/store";
import '../../Style/Reset.scss'
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Pokedex />
			</div>
		</Provider>
	)
}

export default App;
