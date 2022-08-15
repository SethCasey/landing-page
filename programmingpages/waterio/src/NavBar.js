import Weather from "./Weather.js";

export default class NavBar {
    constructor(
        parentElement, 
        weatherIcon = '\u{26C5}',
        homeIcon = '\u{2302}', 
        hamburger = '\u{2630}',) {

        this.parent = document.body;

        this.navBar = document.createElement("div");

        this.weatherButton = document.createElement("button");
        this.weatherButton.textContent = weatherIcon;
        const WeatherPage = new Weather(parentElement);
        this.weatherButton.addEventListener("click", (e) => {
            WeatherPage.clicked();
        })
        this.weatherButton.id = "weatherButton";
        
        this.homeButton = document.createElement("button");
        this.homeButton.textContent = homeIcon;
        this.homeButton.id = "homeButton";

        this.hamburgerButton = document.createElement("button");
        this.hamburgerButton.textContent = hamburger;
        this.hamburgerButton.id = "hamburgerButton";

        this.addClasses();
        this.append(this.navBar, this.weatherButton, this.homeButton, this.hamburgerButton);

        parentElement.appendChild(this.navBar);
    };

    append(parent, ...child) {
        for (let x = 0; x < child.length; x++){
            parent.appendChild(child[x]);
        };
    };
    
    addClasses() {
        this.navBar.classList.add("navBar");
        this.weatherButton.classList.add("navButton");
        this.homeButton.classList.add("navButton");
        this.hamburgerButton.classList.add("navButton");
    };

    addListener(button, action) {
        button.addEventListener("click", (e) => {
            action;
        });
    };
};