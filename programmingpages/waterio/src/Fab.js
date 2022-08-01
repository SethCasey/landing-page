export default class Fab {
    constructor(parentElement, utfIcon = '\u{1F4A7}') {
        this.parent = document.body;

        this.icon = document.createElement("button");
        this.icon.textContent = (utfIcon);


        this.style();
        parentElement.appendChild(this.icon);
    };
    
    style() {
        let styler = this.icon.style;
        styler.position = "Absolute";
        styler.right = "30px";
        styler.bottom = "80px";
        styler.width = "56px";
        styler.height = "56px";
        styler.borderRadius = "0.5em";
        styler.fontSize = "xx-large";
    };
};