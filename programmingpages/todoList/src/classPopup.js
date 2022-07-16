import "./style.css";
import Task from "./task.js"
import card from "./cardCreator.js";


// Make a class to hold the form and its labels
// Should I create the HiddenFormElement, then add a 
// method to add fields? I think so.
export default class HiddenModalElement {
    constructor(modal_id, parent_element, activation_button_id) {
        this.id = modal_id;
        this.parent = document.getElementById(parent_element);
        this.activation_button = document.getElementById(activation_button_id)
        this.array_of_children = [];
        this.modal = document.createElement("modal");
        this.modal.setAttribute("id", this.id);
        this.activation_button.addEventListener("click", (e) => {
            if (this.parent.style.display == "none") {
                this.parent.style.display = "grid";
            } else {
                this.parent.style.display = "none";
            };
        });
        this.parent.style.display = "none";
    };

    add_input(new_input, type = "text") {
        let input_to_add = document.createElement("input");
        input_to_add.type = type;
        input_to_add.id = new_input
        this.array_of_children.push(input_to_add);
    };

    append_to_parent() {
        for (let x = 0; x < this.array_of_children.length; x++) {
            this.parent.appendChild(this.array_of_children[x]);
        };
    }

    make_hidden() {
        this.parent.style.display = "none";
        this.parent.setAttribute("class", "hidden");
    };

    add_buttons() {
        let clear_form_button = document.createElement("button");
        clear_form_button.textContent = "Clear Form";


        let create_another_button = document.createElement("button");
        create_another_button.textContent = "Create Another";

        let submit_button = document.createElement("button");
        submit_button.textContent = "Submit";
        submit_button.addEventListener("click", (e) => this.parent.style.display = "none");

        let close_popup_button = document.createElement("button");
        close_popup_button.textContent = "Close";
        close_popup_button.addEventListener("click", (e) => this.parent.style.display = "none");

        this.parent.appendChild(clear_form_button);
        this.parent.appendChild(submit_button);
        this.parent.appendChild(create_another_button);
    };
}