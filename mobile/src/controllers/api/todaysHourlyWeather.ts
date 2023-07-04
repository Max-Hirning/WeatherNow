import axios from "axios";

class TodaysHourlyWeatherAPI {
    constructor(protected url: string, private key: string) {}

    async get() {
        const currentDate = (new Date()).toJSON().split("T")[0];

        try {
            const response = await axios.get(this.url, {
                params: {
                    fields: [
                        "weatherCode",
                        "temperatureAvg",
                    ],
                    units: "metric",
                    apikey: this.key,
                    timesteps: [ "1h" ],
                    location: "42.3478, -71.0466",
                    endTime: `${currentDate}T23:00:00Z`,
                    startTime: `${currentDate}T00:00:00Z`,
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const todaysHourlyWeatherAPI = new TodaysHourlyWeatherAPI("https://api.tomorrow.io/v4/timelines", "7FWANKOq0NbU0eTn2pxkpGbSPdV8yTlx")