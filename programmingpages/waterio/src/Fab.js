
export default class Fab {
    constructor(parentElement, utfIcon = '\u{1F4A7}') {
        this.parent = document.body;

        this.icon = document.createElement("button");
        this.icon.textContent = (utfIcon);
        this.icon.classList.add("fab");


        parentElement.appendChild(this.icon);
        let fabMenu = this.createMenu(this.parent);
        this.clicked(fabMenu);
    };
    

    createMenu(contentPage) {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("fabmenu", "hidden");

        const whatsTheThirdOne = document.createElement("button");
        whatsTheThirdOne.classList.add("whatsTheThirdOne", "fabButton");
        whatsTheThirdOne.textContent = "What goes here?";
        containerDiv.appendChild(whatsTheThirdOne);

        const enablePesticide = document.createElement("button");
        enablePesticide.classList.add("enablepesticide", "fabbutton");
        enablePesticide.textContent = "Enable Pesticide";
        containerDiv.appendChild(enablePesticide);

        const waterPlants = document.createElement("button");
        waterPlants.classList.add("waterplants", "fabbutton");
        waterPlants.textContent = "Start Watering";
        containerDiv.appendChild(waterPlants);

    

        contentPage.appendChild(containerDiv);
        return containerDiv;
    };

    clicked(fabMenu) {
        this.icon.addEventListener("click", (e) => {
            if (fabMenu.classList.contains("hidden")) {
                fabMenu.classList.remove("hidden");
                fabMenu.classList.add("shown");
            } else {
                fabMenu.classList.remove("shown");
                fabMenu.classList.add("hidden");
            }
        });
    }
};