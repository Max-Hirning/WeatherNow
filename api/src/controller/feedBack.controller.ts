import { Request } from "express";
import { IFeedBack } from "feedBack.types";
import { FeedBackServices } from "../services/feedBack.services";

class FeedBackController {
	constructor(private feedBackService: FeedBackServices) {}

	async get(): Promise<IFeedBack[]> {
		const res = await this.feedBackService.get();
		return(res);
	}

	async post(req: Request): Promise<string> {
		const res = await this.feedBackService.post(req.body);
		return(res);
	}

	async delete(req: Request): Promise<string> {
		const res = await this.feedBackService.delete(req.params.id);
		return(res);
	}

	async getOne(req: Request): Promise<IFeedBack> {
		const res = await this.feedBackService.getOne(req.params.id);
		return(res);
	}
}

export const feedBackController = new FeedBackController(new FeedBackServices());