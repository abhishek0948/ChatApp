import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.listen(PORT,() => {
    console.log(`Server is Running on ${PORT} and connected to DB`);
})