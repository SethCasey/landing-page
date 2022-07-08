import main_page from "./main_page.js";
import contact from "./contact.js";
import about from "./about.js";
import "./style.css";

// console.log("Well, that worked.");
// should probably NOT create a new element under content_div, 
// and instead HIDE the content that is currently present
let content_div = document.getElementById("content");

let home_button = document.createElement("button");
home_button.textContent = "Home";
home_button.addEventListener('click', function () {
    main_page(content_div);
});
document.getElementById("home").appendChild(home_button);

let about_button = document.createElement("button");
about_button.textContent = "About";
about_button.addEventListener("click", () => {
    about(content_div);
});
document.getElementById("about").appendChild(about_button);

let contact_button = document.createElement("button");
contact_button.textContent = "Contact"
contact_button.addEventListener("click", () => {
    contact(content_div);
});
document.getElementById("contact").appendChild(contact_button);

main_page(content_div);
