import { createSlice, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { fetchTrivias } from "../app/pages/Trivias/utils/mockBackEnd";

interface roundsType {
	roundTitle: string;
}

interface competitorssType {
	competitorName: string;
}

interface triviaType {
	triviaTitle: string;
	author: string;
	rounds: roundsType[];
	competitors: competitorssType[];
	id: string;
	createdAt: string;
	updatedAt: string;
}

export type triviasTypeArr = triviaType[];

const fetchUserTrivias = createAsyncThunk("trivia/fetchUserTrivias", async (thunkAPI) => {
	const response = await fetchTrivias();
	return response;
});

const triviaSlice = createSlice({
	name: "trivia",
	initialState: [] as triviasTypeArr,
	reducers: {
		createTrivia: (state, action) => {
			// state.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserTrivias.fulfilled, (state, action) => {
			return action.payload;
		});
	}
});

const { actions, reducer } = triviaSlice;

export { fetchUserTrivias };

export default reducer;
