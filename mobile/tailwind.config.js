/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/UI/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/modules/AirQuality/view/*.{js,jsx,ts,tsx}",
    "./src/modules/SideBarMenu/view/*.{js,jsx,ts,tsx}",
    "./src/modules/ForecastInfo/view/*.{js,jsx,ts,tsx}",
    "./src/modules/ForecastTable/view/*.{js,jsx,ts,tsx}",
    "./src/modules/ForecastSlider/view/*.{js,jsx,ts,tsx}",
    "./src/modules/ForecastSlider/view/*.{js,jsx,ts,tsx}",
    "./src/modules/ForecastDetails/view/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

