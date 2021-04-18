import { createSlice, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchTrivias } from "../app/pages/Trivias/utils/mockBackEnd";

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

interface initialStateType {
	loading: boolean;
	trivias: triviasTypeArr;
}

const fetchUserTrivias = createAsyncThunk("trivia/fetchUserTrivias", async (thunkAPI) => {
	const response = await fetchTrivias();
	return response;
});

const triviaSlice = createSlice({
	name: "trivia",
	initialState: {
		loading: true,
		trivias: []
	} as initialStateType,
	reducers: {
		createTrivia: (state, action) => {
			// state.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserTrivias.fulfilled, (state, action) => {
			state.trivias = action.payload;
		});
	}
});

const { actions, reducer } = triviaSlice;

export { fetchUserTrivias };

export default reducer;
