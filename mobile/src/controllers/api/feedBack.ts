import axios from "axios";
import { APIURL } from "@env";
import { flashMessage } from "../flashMessage";
import { IFeedBack } from "../../modules/FeedBackForm/types";
import { MessagesTypes } from "../../constants/messagesTypes";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../../constants/themes";

class FeedBackAPI {
    constructor(protected url: string) {}

    async post(feedBack: IFeedBack) {
        try {
            const response = await axios.post(this.url, feedBack);
            return response.data;
        } catch {
            flashMessage("Smth went wrong", "Pls contact us: feedback post error", MessagesTypes.WARNING, FlashMessageBackgroundColors.WARNING, FlashMessageColors.WARNING);
        }
    }
}

export const feedBackAPI = new FeedBackAPI(`${APIURL}/api/feedBack`);