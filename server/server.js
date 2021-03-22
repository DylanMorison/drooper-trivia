import "./models/Users.js";
import "./models/Trivia.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import trivRoutes from "./routes/triviaRoutes.js";
import userRoutes from "./routes/UserRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

connectDB();

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.use(morgan("tiny"));
app.use("/api/auth", authRoutes);
app.use("/api/triv", trivRoutes);
app.use("/api/users", userRoutes);
app.use("/api/portfolio", portfolioRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
