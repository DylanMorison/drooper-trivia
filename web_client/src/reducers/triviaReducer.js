import { FETCH_TRIVIAS, CREATE_TRIVIA } from "../actions/types";

// const RoundSchema = new Schema({
// 	roundTitle: {
// 		type: String,
// 		required: true
// 	},
// 	answerType: {
// 		type: String,
// 		required: true,
// 		default: "string"
// 	},
// 	numQuestions: {
// 		type: Number,
// 		default: 8,
// 		required: true
// 	},
// 	questions: [],
// 	answers: []
// });

// const CompetitorsSchema = new Schema({
// 	competitorID: {
// 		type: String
// 	},
// 	username: {
// 		type: String,
// 		default: "Competitor"
// 	},
// 	score: {
// 		type: Number,
// 		default: 0,
// 		required: true
// 	}
// });

// const TriviaSchema = new Schema(
// 	{
// 		triviaTitle: String,
// 		author: {
// 			type: Schema.Types.ObjectId,
// 			ref: "User",
// 			required: true
// 		},
// 		rounds: [RoundSchema],
// 		competitors: [CompetitorsSchema]
// 	},
// 	{
// 		timestamps: true
// 	}
// );

const testTrivs = [
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

export default function (state = testTrivs, action) {
	const { type, payload } = action;

	switch (type) {
		case FETCH_TRIVIAS:
			return payload;
		case CREATE_TRIVIA:
			return [payload, ...state];
		default:
			return state;
	}
}
