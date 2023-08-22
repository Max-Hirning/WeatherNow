# WeatherForecast

Result was published on [Google play](https://play.google.com/store/apps/details?id=com.weather.forecast.twenty.fours.per.seven)


## App Info

### Technologies
#### API
* Cors
* Express
* MongoDB
* TypeScript
* Body parser

#### Mobile
* React
* Axios
* Eslint
* Lottie
* TypeScript
* Tailwind Css
* React Native
* Redux && redux toolkit
* React native navigation
* React reanimated && gesture handler
* and others ...

### Data 
Data was provided [WeatherAPI.com on RapidAPI](https://rapidapi.com/weatherapi/api/weatherapi-com/pricing)


## Available Scripts
#### API
In the project directory, you can run:

### `yarn dev`
Runs the api in the development mode.\
Open [http://localhost:PORT](http://localhost:PORT) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run pre-commit`
Builds the api for production to the `build`. Run this command right before `git add .` and then push commit

### For correct working you have to create .env file in api folder with these datails: 
* `PORT` (Port for api)
* `DB` (MongoDB url for connecting, you can find it in cluster connection)
* `STARTMESSAGE` (Start message, so you could now that server starts working)


#### Mobile
In the project directory, you can run:

### `yarn start`
Starts dev server for running app on emulator

### `yarn run android`
Builds app for emualetor `android`, and open it on opened emulator.

### For correct working you have to create .env file in api folder with these datails: 
* `WEATHER_API_KEY` (weather api key)
* `WEATHER_API_URL` (weather api url)
* `APP_URL` (url on app in google play)
* `FEEDBACK_API_URL` (feedback api url)
* `PLACE_API_KEY` (google place api key)
* `WEATHER_API_HOST` (host weather api url)
