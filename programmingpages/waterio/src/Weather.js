import FormElement from "./formElement.js";

export default class Weather {
    constructor(parentElement) {
        this.contentContainer = document.createElement("div");
        this.contentContainer.classList.add("hidden", "weather", "content");
        parentElement.appendChild(this.contentContainer);

        this.textbox = document.createElement("h3");
        this.textbox.textContent = "Weather Forecast";
        this.contentContainer.appendChild(this.textbox);

        this.zipDesc = document.createElement("label");
        this.zipDesc.textContent = "Zip Code";
        this.contentContainer.appendChild(this.zipDesc);

        this.zipInput = document.createElement("input");
        this.zipInput.id = "zip";
        this.contentContainer.appendChild(this.zipInput);
        let zipInputObj = new FormElement(this.zipInput.id);
        zipInputObj.isZipCode();

        this.submitButton = document.createElement("button");
        this.submitButton.textContent = "Submit";
        this.submitButton.addEventListener("click", (e) => {
            this.getWeather(this.zipInput.value);
        });
        this.contentContainer.appendChild(this.submitButton);

        this.weather = document.createElement("p");
        this.contentContainer.appendChild(this.weather);

    };

    clicked() {
        if (this.contentContainer.classList.contains("hidden")) {
            this.contentContainer.classList.remove("hidden");
            this.contentContainer.classList.add("shown");
        } else {
            this.contentContainer.classList.add("hidden");
            this.contentContainer.classList.remove("shown");
        };
    };

    addWeatherReport(report) {
        this.weather.textContent = report;
    }

    getWeather(zip) {
        // use fetch API to get the weather report and put it on the page.
    }


};