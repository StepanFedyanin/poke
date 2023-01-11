import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../Redux/store";
import '../../Style/Reset.scss'
import AppRouter from "../../Utils/AppRouter.jsx";
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</div>
		</Provider>
	)
}

export default App;
