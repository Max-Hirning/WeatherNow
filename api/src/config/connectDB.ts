import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
	try {
		mongoose.set("strictQuery", true);
		if(process.env.DB) {
			await mongoose.connect(process.env.DB, { dbName: "WeatherNow", });
			console.log("Connected to DB");
		} else {
			console.log("You forgot add dotenv's variables");
		}
	} catch(e: unknown) {
		console.log(e);
	}
};

export default connectDB;