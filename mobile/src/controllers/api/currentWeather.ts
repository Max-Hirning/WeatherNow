import axios from "axios";

class CurrentWeatherAPI {
    constructor(protected url: string, private key: string) {}

    async get() {
        try {
            const response = await axios.get(this.url, {
                params: {
                    fields: [
                        "uvIndexAvg",
                        "humidityAvg",
                        "dewPointAvg",
                        "weatherCode",
                        "windSpeedAvg",
                        "windSpeedMin",
                        "windSpeedMax",
                        "visibilityAvg",
                        "temperatureAvg",
                        "temperatureMax",
                        "temperatureMin",
                        "windDirectionAvg",
                        "temperatureApparentAvg",
                        "precipitationProbabilityAvg",
                    ],
                    units: "metric",
                    startTime: "now",
                    apikey: this.key,
                    timesteps: [ "current" ],
                    location: "42.3478, -71.0466",
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const currentWeatherAPI = new CurrentWeatherAPI("https://api.tomorrow.io/v4/timelines", "7FWANKOq0NbU0eTn2pxkpGbSPdV8yTlx")