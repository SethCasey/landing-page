import "./style.css";
// I don't necessarily want this module to depend on Task or Card. I want
// to be able to use it for any popup form on any page.
// So instead of importing, I need to allow it to be created with calls
// to those functions. The integration should be done in index.js.....
import Task from "./task.js"
import card from "./cardCreator.js";


// Make a class to hold the form and its labels
// Should I create the HiddenFormElement, then add a 
// method to add fields? I think so.
export default class HiddenModalElement {
    constructor(modal_id, parent_element, activation_button_id, array_to_export_to) {
        this.id = modal_id;
        this.parent = document.getElementById(parent_element);
        this.activation_button = document.getElementById(activation_button_id)
        this.array_of_children = [];
        this.submit_buttons_array = [];
        this.modal = document.createElement("modal");
        this.modal.setAttribute("id", this.id);

        this.activation_button.addEventListener("click", (e) => {
            if (this.parent.style.display == "none") {
                this.parent.style.display = "grid";
            } else {
                this.parent.style.display = "none";
            };
        });

        this.array_to_export_to = array_to_export_to;
        this.parent.style.display = "none";
    };

    add_input(new_input, type = "text") {

        let input_to_add = document.createElement("input");
        input_to_add.type = type;
        let input_spaces_removed = new_input.replace(/ /g, "");
        input_to_add.id = input_spaces_removed.toLowerCase();
        input_to_add.class = "input_field";

        let label_for_input = document.createElement("label");
        label_for_input.htmlFor = input_to_add;
        label_for_input.textContent = new_input;

        this.array_of_children.push(label_for_input);
        this.array_of_children.push(input_to_add);
        //Do I need to save that id anywhere other than the array?

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
        clear_form_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            }
        });

        let create_another_button = document.createElement("button");
        this.submit_buttons_array.push(create_another_button);
        create_another_button.textContent = "Create Another";
        create_another_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            };
        });

        let submit_button = document.createElement("button");
        this.submit_buttons_array.push(submit_button);
        submit_button.textContent = "Submit";
        submit_button.addEventListener("click", (e) => {
            this.parent.style.display = "none";
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            };
        });

        let close_popup_button = document.createElement("button");
        close_popup_button.textContent = "Close";
        close_popup_button.addEventListener("click", (e) => this.parent.style.display = "none");
        close_popup_button.addEventListener("click", (e) => {
            for (let x = 0; x < this.array_of_children.length; x++) {
                if (this.array_of_children[x].class == "input_field") {
                    this.array_of_children[x].value = "";
                };
            }
        });

        this.parent.appendChild(clear_form_button);
        this.parent.appendChild(submit_button);
        this.parent.appendChild(create_another_button);
    };
};