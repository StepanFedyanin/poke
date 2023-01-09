import Error from "../Pages/Error/Error";
import Index from "../Pages/Index";
import Pokedex from "../Pages/Pokedex";

export const RoutesList = [
	{ path: '/poke/index', element: <Index /> },
	{ path: '/poke/pokedex', element: <Pokedex /> },
	{ path: '/poke/*', element: <Error /> },
]