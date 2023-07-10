import axios from "axios";

class RealtimeWeatherAPI {
    constructor(protected url: string, private key: string, private host: string) {}

    async get() {
        try {
            const options = {
                headers: {
                    'X-RapidAPI-Key': this.key,
                    'X-RapidAPI-Host': this.host,
                },
                method: 'GET',
                url: this.url,
                params: {q: '53.1,-0.13'},
            };
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

export const realtimeWeatherAPI = new RealtimeWeatherAPI('https://weatherapi-com.p.rapidapi.com/current.json', 'd346c6f5c9mshf284681ba89d374p19e1d9jsn475b80c7c799', 'weatherapi-com.p.rapidapi.com')