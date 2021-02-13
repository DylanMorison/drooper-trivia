import express from "express";
import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth.js";

const User = mongoose.model("User");
const Trivia = mongoose.model("Trivia");

const router = express.Router();

/**
 * When we add a competitor we will need the
 * competitor's _id to store, as well as a username
 */

router.post("/add/competitor", requireAuth, async (req, res) => {
	const user = req.user;
	const { triv_id, newCompetitorID, username } = req.body;

	try {
		const currentTrivia = await Trivia.findById({ _id: triv_id, author: user._id });

		if (currentTrivia) {
			const userExistsBool = currentTrivia.checkForCompetitor(newCompetitorID);

			if (!userExistsBool) {
				currentTrivia.competitors.push({
					competitorID: newCompetitorID,
					score: 0,
					username
				});
				await currentTrivia.save((err, doc) => {
					if (err) return res.status(400).send(err.message);
					res.send(doc);
					return;
				});
			} else {
				res.status(400).send("ERROR! This user has already been added to Trivia!");
			}
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.delete("/remove/competitor", requireAuth, async (req, res) => {
	const user = req.user;
	const { triv_id, competitorID } = req.body;

	try {
		const currentTrivia = await Trivia.findById({ _id: triv_id, author: user._id });

		if (currentTrivia) {
			currentTrivia.removeCompetitor(competitorID);

			await currentTrivia.save((err, doc) => {
				if (err) return res.status(400).send(err.message);
				res.send(doc);
				return;
			});
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.get("/competitors", requireAuth, async (req, res) => {
	const user = req.user;
	const { _id } = req.body;

	await Trivia.findById({ _id, author: user._id }, (err, doc) => {
		if (err) return res.status(400).send(err.message);

		res.send(doc.competitors);
		return;
	});
});

router.get("/", requireAuth, async (req, res) => {
	await User.find((err, docs) => {
		if (err) return res.status(400).send(err.message);
		res.send(docs);
		return;
	});
});

export default router;
