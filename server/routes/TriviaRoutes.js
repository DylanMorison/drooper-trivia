import express from "express";
import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth.js";
import anserTypeCheck from "../middleware/anserTypeCheck.js";
const User = mongoose.model("User");
const Trivia = mongoose.model("Trivia");

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
	const user = req.user;

	try {
		const trivias = await Trivia.find({ author: user._id }).sort({ createdAt: -1 });
		res.send(trivias);
	} catch (err) {
		return res.status(400).send(err.message);
	}

	// await Trivia.find(
	// 	{ author: user._id },
	// 	{ sort: { updatedAt: "asc" } },
	// 	(err, docs) => {
	// 		if (err) return res.status(400).send(err.message);
	// 		res.send(docs);
	// 	}
	// );
});

router.get("/triv-by-id", requireAuth, async (req, res) => {
	const { _id } = req.body;
	const user = req.user;

	await Trivia.findById({ _id, author: user._id }, (err, doc) => {
		if (err) return res.status(400).send(err.message);
		res.send(doc);
	});
});

router.post("/create", requireAuth, async (req, res) => {
	const user = req.user;

	const { triviaTitle } = req.body;

	try {
		await new Trivia({ triviaTitle, author: user._id }).save((err, doc) => {
			if (err) throw err;

			res.status(200).send(doc);
		});
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.post("/round/create", requireAuth, anserTypeCheck, async (req, res) => {
	const user = req.user;
	const { triviaID, roundTitle, answerType, numQuestions, questions, answers } = req.body;

	try {
		const currentTrivia = await Trivia.findOne({ _id: triviaID, author: user._id });

		if (currentTrivia) {
			currentTrivia.rounds.push({
				roundTitle,
				answerType,
				numQuestions,
				questions,
				answers
			});

			await currentTrivia.save((err, doc) => {
				if (err) return res.status(400).send(err.message);
				res.send(doc);
			});
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.delete("/round/delete", requireAuth, async (req, res) => {
	const user = req.user;
	const { _id, roundId } = req.body;

	try {
		const currentTriva = await Trivia.findById({ _id, author: user._id });

		if (currentTriva) {
			currentTriva.rounds.id(roundId).remove();
			await currentTriva.save((err, doc) => {
				if (err) return res.status(400).send(err.message);
				return res.send(doc);
			});
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.delete("/delete", requireAuth, async (req, res) => {
	const user = req.user;
	const { _id } = req.body;

	try {
		await Trivia.findByIdAndDelete({ _id, author: user._id }, (err, doc) => {
			if (err) return res.status(400).send(err.message);
		});
		const trivias = await Trivia.find({ author: user._id }).sort({ createdAt: -1 });
		return res.status(200).send(trivias);
	} catch (err) {
		console.log(err.message);
		res.status(400).send(err.message);
	}
});

export default router;
