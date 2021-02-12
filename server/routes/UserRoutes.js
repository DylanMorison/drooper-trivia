import express from "express";
import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth.js";

const User = mongoose.model("User");
const Trivia = mongoose.model("Trivia");

const router = express.Router();

router.post("/add/competitor", requireAuth, async (req, res) => {
	const user = req.user;
	const { _id, newCompetitor } = req.body;

	try {
		const currentTriva = await Trivia.findById({ _id, author: user._id });

		if (currentTriva) {
			const testDup = await currentTriva.checkCompetitorsForDups(newCompetitor);

			if (testDup) {
				return;
			}

			currentTriva.competitors.push({ user: newCompetitor, score: 0 });
			await currentTriva.save((err, doc) => {
				if (err) return res.status(400).send(err.message);
				res.send(doc);
				return;
			});
		}
	} catch (err) {
		res.status(400).send(err.message);
	}
});

router.post("/remove/competitor", requireAuth, async (req, res) => {
	const user = req.user;
	const { _id, newCompetitor } = req.body;

	try {
		const currentTriva = await Trivia.findById({ _id, author: user._id });

		if (currentTriva) {
			const testDup = await currentTriva.checkCompetitorsForDups(newCompetitor);

			if (testDup) {
				return;
			}

			currentTriva.competitors.push({ user: newCompetitor, score: 0 });
			await currentTriva.save((err, doc) => {
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
