import "dotenv/config";
import cors from "cors";
import express from "express";
import AppRouter from "./routes";
import bodyParser from "body-parser";
import connectDB from "./config/connectDB";

const app = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();
router.init();

app.listen(process.env.PORT, (): void => console.log(`${process.env.STARTMESSAGE}${process.env.PORT}`));