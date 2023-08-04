import axios from "axios";
import { HOST, KEY, URL } from "@env";
import { flashMessage } from "../flashMessage";
import { MessagesTypes } from "../../constants/messagesTypes";
import { FlashMessageBackgroundColors, FlashMessageColors } from "../../constants/themes";

class ForecastWeatherAPI {
    constructor(protected url: string, private key: string, private host: string) {}

    async get(location: string) {
        try {
            const options = {
                params: {
                    days: '3',
                    q: location,
                },
                method: 'GET',
                url: this.url,
                headers: {
                    'X-RapidAPI-Key': this.key,
                    'X-RapidAPI-Host': this.host,
                }
            };
            const response = await axios.request(options);
            return response.data;
        } catch {
            flashMessage("Smth went wrong", "Pls contact us: get weather api error", MessagesTypes.ERROR, FlashMessageBackgroundColors.ERROR, FlashMessageColors.ERROR);
        }
    }
}

export const forecastWeatherAPI = new ForecastWeatherAPI(URL, KEY, HOST);