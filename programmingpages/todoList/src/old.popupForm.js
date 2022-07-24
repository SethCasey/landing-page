import "./style.css";
import Task from "./task.js"
import card from "./cardCreator.js";

export function TaskInputFieldCreator(input_name, input_type = "text", parent_element_arg = "tasks") {
    // hardcoded "tasks" to debug... 20220713
    let parent_element = document.getElementById("tasks");
    // document.getElementById(parent_element_arg);

    let form_element = document.createElement("form");

    let input_element = document.createElement("input");
    input_element.type = input_type;
    input_element.id = input_name;

    let input_element_label = document.createElement("label");
    input_element_label.htmlFor = input_name;
    input_element_label.textContent = `${input_name}: `;

    form_element.appendChild(input_element_label);
    form_element.appendChild(input_element);
    parent_element.appendChild(form_element);
};

export function PopupFormButtons(popup_form, activation_button_id = "add_task") {
    let form_element = document.getElementById(popup_form);

    let clear_form_button = document.createElement("button");
    clear_form_button.textContent = "Clear Form";

    let submit_button = document.createElement("button");
    submit_button.textContent = "Submit";

    let create_another_button = document.createElement("button");
    create_another_button.textContent = "Create Another";

    let close_popup_button = document.createElement("button");
    close_popup_button.textContent = "Close";
    close_popup_button.addEventListener("click", (e) => form_element.style.display = "none");

    form_element.appendChild(clear_form_button);
    form_element.appendChild(submit_button);
    form_element.appendChild(create_another_button);
    form_element.style.display = "none";

    activation_button_id = document.getElementById(activation_button_id)
    activation_button_id.addEventListener("click", () => {
        form_element.style.display = "grid";
    });
};
