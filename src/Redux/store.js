import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ToolkitSlise from "./Slice/ToolkitSlice";

const rootReducer = combineReducers({
	pokidex: ToolkitSlise
})

export const store = configureStore({
	reducer: rootReducer
})