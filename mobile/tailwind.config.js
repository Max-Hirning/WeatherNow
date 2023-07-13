/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/*.{js,jsx,ts,tsx}",
    "./src/UI/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/modules/StartInfo/view/*.{js,jsx,ts,tsx}",
    "./src/modules/SideBarMenu/view/*.{js,jsx,ts,tsx}",
    "./src/modules/WeekForecast/view/*.{js,jsx,ts,tsx}",
    "./src/modules/TodayForecast/view/*.{js,jsx,ts,tsx}",
    "./src/modules/TodayForecastSlider/view/*.{js,jsx,ts,tsx}",
    "./src/modules/TodayForecastDetails/view/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

