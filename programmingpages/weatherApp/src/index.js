import Forecast from "./Forecast";

const content = document.getElementById("forecast");
const zipInput = document.getElementById("zipCode");
const keyInput = document.getElementById("apiKey");



let newForecast = new Forecast("27513");
newForecast.weatherResult();