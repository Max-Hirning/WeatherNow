import axios from "axios";

class DailyWeatherAPI {
    constructor(protected url: string, private key: string) {}

    async get() {
        try {
            const response = await axios.get(this.url, {
                params: {
                    fields: [
                        "weatherCode",
                        "temperatureMax",
                        "temperatureMin",
                        "temperatureAvg",
                        "precipitationProbability",
                    ],
                    units: "metric",
                    apikey: this.key,
                    startTime: "now",
                    timesteps: [ "1d" ],
                    location: "42.3478, -71.0466",
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const dailyWeatherAPI = new DailyWeatherAPI("https://api.tomorrow.io/v4/timelines", "7FWANKOq0NbU0eTn2pxkpGbSPdV8yTlx")