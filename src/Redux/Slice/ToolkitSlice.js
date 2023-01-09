import { createSlice } from "@reduxjs/toolkit";

const toolKitSlice = createSlice({
	name: "pokedex",
	initialState: {
		pokiList: [],
		params: {
			limit: 9,
			offset: 0
		},
		category: {
			categoryListId: [],
			categoryListTitle: [],
			categoryWork: false
		},
		ViewingModalPoke: {
			content: {

			},
			loading: false
		}
	},
	reducers: {
		changeList(state, action) {
			state.pokiList = action.payload
		},
		changePagination(state, action) {
			state.params.offset = state.params.offset + action.payload
		},
		changeCategoryListTitle(state, action) {
			state.category.categoryListTitle = action.payload
		},
		changeCategoryListId(state, action) {
			state.category.categoryListId = action.payload
		},
		changeCategoryWork(state, action) {
			state.category.categoryWork = action.payload
		},
		changeModalPoke(state, action) {
			state.ViewingModalPoke.content = action.payload;
		},
		changeModalLoading(state, action) {
			state.ViewingModalPoke.loading = action.payload;
		}
	}
})

export default toolKitSlice.reducer;
export const {
	changeList,
	changePagination,
	changeCategoryListTitle,
	changeCategoryListId,
	changeModalPoke,
	changeModalLoading,
	changeCategoryWork
} = toolKitSlice.actions;