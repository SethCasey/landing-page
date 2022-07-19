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
    constructor(modal_id, parent_element, activation_button_id) {
        this.id = modal_id;
        this.parent = document.getElementById(parent_element);
        this.activation_button = document.getElementById(activation_button_id)
        this.input_fields_array = [];
        this.labels_for_inputs_array = [];
        this.submit_buttons_array = [];
        this.clear_buttons_array = [];
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
        let input_spaces_removed = new_input.replace(/ /g, "");
        input_to_add.id = input_spaces_removed.toLowerCase();
        input_to_add.class = "input_field";

        let label_for_input = document.createElement("label");
        label_for_input.htmlFor = input_to_add;
        label_for_input.textContent = new_input;
        label_for_input.class = "field_label";

        this.labels_for_inputs_array.push(label_for_input);
        this.input_fields_array.push(input_to_add);
        //Do I need to save that id anywhere other than the array?

    };

    append_to_parent() {
        for (let x = 0; x < this.input_fields_array.length; x++) {
            this.parent.appendChild(this.labels_for_inputs_array[x]);
            this.parent.appendChild(this.input_fields_array[x]);
        };
    }

    toggle_hidden() {
        if (this.parent.style.display == "none") {
            this.parent.style.display = "grid";
            this.parent.removeAttribute("class", "hidden");
        } else {
            this.parent.style.display = "none";
            this.parent.setAttribute("class", "hidden");
        };
    };

    add_buttons() {
        let clear_form_button = document.createElement("button");
        clear_form_button.textContent = "Clear Form";
        this.clear_buttons_array.push(clear_form_button);

        let create_another_button = document.createElement("button");
        this.submit_buttons_array.push(create_another_button);
        this.clear_buttons_array.push(create_another_button);
        create_another_button.textContent = "Create Another";

        let submit_button = document.createElement("button");
        this.submit_buttons_array.push(submit_button);
        this.clear_buttons_array.push(submit_button);
        submit_button.textContent = "Submit";
        submit_button.addEventListener("click", (e) => {
            this.toggle_hidden();
        })

        let close_popup_button = document.createElement("button");
        close_popup_button.textContent = "Close";
        close_popup_button.addEventListener("click", (e) => {
            this.toggle_hidden();
        });

        this.parent.appendChild(clear_form_button);
        this.parent.appendChild(submit_button);
        this.parent.appendChild(create_another_button);
    };

    return_submit_button_objects() {
        return this.submit_buttons_array;
    };

    clear_fields() {
        for (let x = 0; x < this.input_fields_array.length; x++) {
            if (this.input_fields_array[x].class == "input_field") {
                this.input_fields_array[x].value = "";
            };
        };
    };

    return_field_values() {
        let values_of_fields = [];
        for (let x = 0; x < this.input_fields_array.length; x++) {
            if (this.input_fields_array[x].class == "input_field") {
                if (this.input_fields_array[x].type == "text") {
                    values_of_fields.push(this.input_fields_array[x].value);
                } else if (this.input_fields_array[x].type == "number") {
                    values_of_fields.push(parseInt(this.input_fields_array[x].value));
                };
            };
            // the below if / else is commented out because I'm not sure that I 
            // want the labels transferred out into the array. For now, just the values.
            //     if (this.array_of_fields[x].class == "input_field") {
            //         values_of_fields.push(this.array_of_fields[x].value);
            //     } else {
            //         values_of_fields.push(this.array_of_fields[x].textContent);
            //     }
            // };
        };

        return values_of_fields;
    };
};

