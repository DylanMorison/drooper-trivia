import mongoose from "mongoose";
import bycrpt from "bcrypt";

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	numTrivsCreated: {
		type: Number,
		default: 0
	},
	numTrivsCompeted: {
		type: Number,
		default: 0
	},
	numTrivsWon: {
		type: Number,
		default: 0
	}
});

UserSchema.pre("save", function (next) {
	const user = this;
	if (!user.isModified("password")) {
		return next();
	}

	bycrpt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}

		bycrpt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;

	return new Promise((resolve, reject) => {
		bycrpt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) {
				return reject(err);
			}

			if (!isMatch) {
				return reject(false);
			}

			resolve(true);
		});
	});
};

export default mongoose.model("User", UserSchema);
