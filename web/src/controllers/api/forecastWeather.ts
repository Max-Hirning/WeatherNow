import axios from "axios";

class ForecastWeatherAPI {
	constructor(protected url: string, private key: string, private host: string) {}

	async get(location: string) {
		try {
			const options = {
				params: {
					days: "3",
					q: location,
				},
				method: "GET",
				url: this.url,
				headers: {
					"X-RapidAPI-Key": this.key,
					"X-RapidAPI-Host": this.host,
				}
			};
			const response = await axios.request(options);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
}

export const forecastWeatherAPI = new ForecastWeatherAPI("https://weatherapi-com.p.rapidapi.com/forecast.json", "d346c6f5c9mshf284681ba89d374p19e1d9jsn475b80c7c799", "weatherapi-com.p.rapidapi.com");