import express from "express";
import { portfolioEmail } from "../marketing/email.js";

const router = express.Router();

router.post("/email", async (req, res) => {
	const { email, subject, message } = req.body;
	try {
		const customResponse = await portfolioEmail(email, subject, message);

		if (customResponse) {
			return res.status(200).send();
		}
	} catch (err) {
		res.status(500).send({ err: err.message });
	}
});

export default router;
