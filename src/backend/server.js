import express from "express";
import connectDB from "./db.js"; // Corrected path
import dotenv from "dotenv";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my portfolio application')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
