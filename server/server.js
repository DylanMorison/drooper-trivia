import "./models/Users.js";
import express from "express";
import connectDB from "./config/db.js";
import requireAuth from "./middleware/requireAuth.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();

const app = express();
const jsonNoExtended = express.json({ extended: false });

app.use(jsonNoExtended);
app.use(authRoutes);

app.get("/", requireAuth, async (req, res) => {
	res.send(`Your email is ${req.user.email}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
