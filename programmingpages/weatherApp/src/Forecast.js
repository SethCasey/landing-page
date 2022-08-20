export default class Forecast {
    constructor(zipCodeElement, apiKeyElement) {
        if (zipCodeElement.value) {
            this.zip = zipCodeElement.value;
        } else {
            this.zip = "27513";
        };
        if (apiKeyElement) {
            this.keyInput = apiKeyElement.value;
        } else {
            this.keyInput = "";
        };
        this.time = [];
        this.description = [];
        this.tempFeels = [];
    };

    async getApiText() {
        let apiKey = await fetch("./secrets.txt")
        return (await apiKey.text()).toString();
    };

    async __getWeatherJson() {;
        let key;
        if (this.keyInput === "") {
            key = await this.getApiText();
        } else {
            key = this.keyInput;
        };
        let getForecastJson = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.zip}&appid=${key}&units=imperial`)
        return (getForecastJson.json());
    };
    
    async weatherResult() {
        let forecastJson = await this.__getWeatherJson();
        this.city = forecastJson.city.name;
        this.sunrise = forecastJson.city.sunrise;
        this.sunset = forecastJson.city.sunset;
        console.log("Printing forecastJson.city");
        console.log(forecastJson.city);
        console.log("Printing this.city")
        console.log(this.city)
        console.log("Printing forecastJson.city.sunrise");
        console.log(this.sunrise)
        console.log("Printing forecastJson.city.sunset");
        console.log(this.sunset);
        console.log("Printing forecastJson.list");
        console.log(forecastJson.list);
        for (let i=0; i < (forecastJson.list.length); i++) {
            console.log(`This is forecastJson.list number ${i}`)
            this.time[i] = forecastJson.list[i].dt_txt;
            console.log(`This is the date/time ${forecastJson.list[i].dt_txt}`)
            console.log("Printing forecastJson.list[i].weather[0].description ")
            this.description[i] = 
            console.log(forecastJson.list[i].weather[0].description);
            console.log("Printing forecastJson.list[i].main.feels_like")
            this.tempFeels = forecastJson.list[i].main.feels_like;
            console.log(forecastJson.list[i].main.feels_like);
        };
    };
    
}