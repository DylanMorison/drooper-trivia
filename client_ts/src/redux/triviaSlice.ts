import { createSlice } from "@reduxjs/toolkit";

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

const testTrivs: triviasTypeArr = [
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	},
	{
		triviaTitle: "triviaTitle",
		author: "triviaAuthor",
		rounds: [
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" },
			{ roundTitle: "roundTitle" }
		],
		competitors: [
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" },
			{ competitorName: "competitorName" }
		],
		id: "6032ff6400e36e7650ac24d1",
		createdAt: "2021-02-22T00:48:36.209+00:00",
		updatedAt: "2021-02-22T00:48:36.209+00:00"
	}
];

const triviaSlice = createSlice({
	name: "auth",
	initialState: testTrivs,
	reducers: {
		getTrivias: (state, action) => {
			state = action.payload;
		}
	}
});

const { actions, reducer } = triviaSlice;

export const { getTrivias } = actions;

export default reducer;
