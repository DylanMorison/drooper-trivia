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
	competitorID: {
		type: String,
		unique: true
	},
	username: {
		type: String,
		unique: true,
		default: "Competitor"
	},
	score: {
		type: Number,
		default: 0,
		required: true
	}
});

const TriviaSchema = new Schema(
	{
		triviaTitle: String,
		rounds: [RoundSchema],
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		competitors: [CompetitorsSchema]
	},
	{
		timestamps: true
	}
);

TriviaSchema.methods.removeCompetitor = function (newCompetitorId) {
	const currentTrivia = this;

	const numCompetitors = currentTrivia.competitors.length;

	let my_id = [];

	for (let i = 0; i < numCompetitors; i++) {
		if (currentTrivia.competitors[i].competitorID === newCompetitorId) {
			my_id = currentTrivia.competitors[i].id;

			currentTrivia.competitors.id(my_id).remove();
			return;
		}
	}
};

TriviaSchema.methods.checkForCompetitor = function (newCompetitorId) {
	const currentTrivia = this;

	const numCompetitors = currentTrivia.competitors.length;

	for (let i = 0; i < numCompetitors; i++) {
		if (currentTrivia.competitors[i].competitorID === newCompetitorId) {
			return true;
		}
	}

	return false;
};

export default mongoose.model("Trivia", TriviaSchema);
