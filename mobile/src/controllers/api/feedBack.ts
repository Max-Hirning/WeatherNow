import axios from "axios";
import { APIURL } from "@env";
import { IFeedBack } from "../../modules/FeedBackForm/types";

class FeedBackAPI {
    constructor(protected url: string) {}

    async post(feedBack: IFeedBack) {
        try {
            const response = await axios.post(this.url, feedBack);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const feedBackAPI = new FeedBackAPI(`${APIURL}/api/feedBack`);