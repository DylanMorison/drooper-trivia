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

export default function triviaReducer(state = [], action) {
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
