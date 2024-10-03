import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import Main from "./routes/default.js";
import connectDB from "./db/database.js";
// APP CONFIG
const app = express();
const port = process.env.PORT || 7000;

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use("/", Main);

// DB CONFIG
connectDB();

// API ENDPOINTS
app.get("/", (req, res) => res.status(200).send("Welcome Derrick"));

// LISTERNER
app.listen(port, () => console.log(`Listening on localhost:${port}`));

// mongodb+srv://derrickpennel0:<password>@cluster0.ddtuy8t.mongodb.net/
