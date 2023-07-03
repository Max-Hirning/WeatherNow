import axios from "axios";

class CurrentWeatherAPI {
    constructor(protected url: string, private key: string) {}

    async get() {
        try {
            const response = await axios.get(this.url, {
                params: {
                    lat: 44.34,
                    lon: 10.99,
                    appid: this.key,
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const currentWeatherAPI = new CurrentWeatherAPI("https://api.openweathermap.org/data/2.5/weather", "624bcbcbbfcb213303e7eabc4b388ab6")