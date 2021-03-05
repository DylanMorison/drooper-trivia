import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
import crypto from "crypto";
import { verifyEmail, passwordReset } from "../marketing/email.js";
import requireAuth from "../middleware/requireAuth.js";

const User = mongoose.model("User");

const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
	try {
		console.log(req);
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(500).send("Server Error");
	}
});

router.post("/signup", async (req, res) => {
	const { email, password } = req.body;

	const user = new User({
		email,
		emailToken: crypto.randomBytes(64).toString("hex"),
		isVerified: false,
		password
	});

	try {
		await verifyEmail(email, user.emailToken);

		await user.save();

		const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));
		res.send({ token, userId: user._id, isVerified: false });
	} catch (err) {
		console.log(err.message);
		return res.status(422).send(err.message);
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
			return res.status(404).send({ error: "Email Not Found" });
		}

		await user.comparePassword(password);

		const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));

		res.send({ token, userId: user._id, isVerified: user.isVerified });
	} catch (err) {
		console.log(err);
		return res.status(422).send({ err: err.message });
	}
});

// email verification route
router.get("/verify-email", async (req, res) => {
	try {
		const user = await User.findOne({ emailToken: req.query.token });
		if (user) {
			user.emailToken = null;
			user.isVerified = true;
			await user.save();
			res.status(200).send(`${user.email} has been verified!`);
		}
	} catch (err) {
		console.log(err);
	}
});

// reset password
router.post("/password-reset-code", async (req, res) => {
	const { email } = req.body;

	try {
		const user = await User.findOne({ email }).select("-password");

		if (user) {
			const code = Math.floor(Math.random() * 1000000 + 1);

			await passwordReset(email, code);

			res.json({ email, code });
		}
	} catch (err) {
		console.log(err);
	}
});

export default router;
