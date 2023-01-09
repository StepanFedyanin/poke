import React from 'react'
import { Route, Routes } from "react-router-dom";
import Index from '../Pages/Index';
import { RoutesList } from '../Routes/Route';
const AppRouter = () => {
	return (
		<Routes>
			{
				RoutesList.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
			<Route path={"/poke"} element={<Index />} />
		</Routes>

	)
}

export default AppRouter