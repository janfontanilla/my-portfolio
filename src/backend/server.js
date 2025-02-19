import express from "express";
import connectDB from "./db.js"; // Corrected path
import dotenv from "dotenv";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
