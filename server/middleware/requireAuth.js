import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import config from "config";

const User = mongoose.model("User");

export default (req, res, next) => {
	console.log("Authorization: ", req.get("Authorization"));
	console.log("___________________________________");

	const { authorization } = req.headers;

	if (!authorization) {
		console.log("No authorization Header :(");
		return res.status(401).send({ error: "You must be logged in!" });
	}

	// jwt_token === 'Bearer dlsfdskljsdkfj4389fhsjdehf'

	const token = authorization.replace("Bearer ", "");
	jwt.verify(token, config.get("jwtSecret"), async (err, payload) => {
		if (err) {
			return res.status(401).send("Yo u must be logged in");
		}

		const { userId } = payload;

		const user = await User.findById(userId);
		console.log(user);
		req.user = user;
		next();
	});
};
