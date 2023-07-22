import { IFeedBack } from "feedBack.types";
import { FeedBackModel } from "../models/feedBack.model";

export class FeedBackServices {
	async get(): Promise<IFeedBack[]> {
		const res = await FeedBackModel.find();
		return(res);
	}

	async delete(_id: string): Promise<string> {
		await FeedBackModel.deleteOne({ _id });
		return("Feedback was deleted successfully");
	}

	async getOne(_id: string): Promise<IFeedBack> {
		const res = await FeedBackModel.findOne({ _id });
		if(res) {
			return(res);	
		} else {
			throw "There is no such feedback";
		}
	}

	async post(feedBack: IFeedBack): Promise<string> {
		await FeedBackModel.create(feedBack);
		return("Feedback was sent successfully");
	}
}