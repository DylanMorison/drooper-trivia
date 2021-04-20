import {
	createSlice,
	createAsyncThunk,
	ThunkDispatch,
	PayloadAction
} from "@reduxjs/toolkit";
import { fetchTrivias } from "../app/pages/Trivias/utils/mockBackEnd";
import { checkLocalStorage } from "./utils/checkLocalStorage";
import { getFromLS } from "./utils/retrieveFromLocalStorage";

interface triviaType {
	triviaTitle: string;
	author: string;
	rounds: { roundTitle: string }[];
	competitors: { competitorName: string }[];
	id: string;
	createdAt: string;
	updatedAt: string;
}

export type triviasTypeArr = triviaType[];

export interface initialStateType {
	loaded: boolean | 'pending';
	trivias: triviasTypeArr;
}

const fetchUserTriviasThunk = createAsyncThunk("trivia/fetchUserTrivias", async () => {
	try {
		const response = await fetchTrivias();
		return response;
	} catch (err) {
		console.error("err fetching trivias", err);
	}
});

const triviaSlice = createSlice({
	name: "trivia",
	initialState: {
		loaded: false,
		trivias: []
	} as initialStateType,
	reducers: {
		wipeTrivias: (state) => {
			return (state = {
				loaded: false,
				trivias: []
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserTriviasThunk.fulfilled, (state, { payload }) => {
			return (state = {
				trivias: payload!,
				loaded: true
			});
		});
	}
});

const { actions, reducer } = triviaSlice;

export { fetchUserTriviasThunk, actions };

export default reducer;
