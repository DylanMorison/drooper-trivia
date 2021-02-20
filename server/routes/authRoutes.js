import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
import requireAuth from "../middleware/requireAuth.js";

const User = mongoose.model("User");

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (error) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

router.post("/signup", async (req, res) => {
	const { email, password } = req.body;

	const user = new User({ email, password });
	try {
		await user.save();

		const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));
		res.send({ token, userId: user._id });
	} catch (error) {
		console.log(error.message);
		return res.status(422).send(error.message);
	}
});

router.post("/signin", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(422).send({ error: "Missing Email or Password" });
	}

	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(402).send({ error: "Email Not Found" });
		}

		await user.comparePassword(password);

		const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));

		res.send({ token, userId: user._id });
	} catch (error) {
		return res.status(422).send({ error: "Invalid Password or Email" });
	}
});

export default router;
