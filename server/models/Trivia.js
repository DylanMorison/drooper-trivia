import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
	roundTitle: {
		type: String,
		required: true
	},
	answerType: {
		type: String,
		required: true,
		default: "string"
	},
	numQuestions: {
		type: Number,
		default: 8,
		required: true
	},
	questions: [],
	answers: []
});

const CompetitorsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
		unique: true,
		username: { type: String, default: "competitor" }
	},
	score: {
		type: Number,
		default: 0,
		required: true
	}
});

const TriviaSchema = new Schema({
	numRounds: {
		type: Number,
		default: 0
	},
	rounds: [RoundSchema],
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	competitors: [CompetitorsSchema]
});

export default mongoose.model("Trivia", TriviaSchema);
