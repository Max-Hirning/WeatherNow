import { model, Schema } from "mongoose";
import { IFeedBack } from "../types/feedBack.types";

const feedBack = new Schema({
	theme: { type: String, required: true },
	details: { type: String, required: true },
});

export const FeedBackModel = model<IFeedBack>("FeedBacks", feedBack);