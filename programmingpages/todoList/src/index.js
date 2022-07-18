import "./style.css";
import Task from "./task.js"
import card from "./cardCreator.js";
// import { TaskInputFieldCreator, PopupFormButtons } from "./popupForm.js";
import HiddenModalElement from "./classPopup.js"

// a manual use of the Task class to create a Task object.
let exampleTask = new Task("Testtask", "Description of task", "Aug 1", "0");

let example_task_with_spaces = new Task("Test Task", "This task has spaces", "Aug 1", "2");

let modal_fields_array = [
    "Task Name",
    "Description of Task",
    "Due Date",
    "Priority",
];

let values_of_input_fields = [];

let popup_modal = new HiddenModalElement("popup_modal", "modal", "add_task");
for (let x = 0; x < modal_fields_array.length; x++) {
    popup_modal.add_input(modal_fields_array[x], "text");
};
popup_modal.append_to_parent();
popup_modal.add_buttons();
popup_modal.clear_fields_event_listener();

let submit_buttons = [];
submit_buttons.push(popup_modal.submit_buttons_array);
for (let x = 0; x < popup_modal.submit_buttons_array.length; x++) {
    submit_buttons[0][x].addEventListener("click", (e) => {
        values_of_input_fields = [];
        values_of_input_fields.push(popup_modal.return_field_values());
        console.log(values_of_input_fields);
    });
};
// now I have an event listener (created here) to pull the array of values and store it
// in values_of_input_fields[0].

// This is erased each time the thingy is called. The values are in the order of
// fieldname, value_of_field, fieldname, value_of_field etc etc...

// i can use this unmodified to create cards with custom name fields. I should do this.
// I can use the order of the array as it is for now.

// card("cards", "project", ());
// Now that the modal pops up and disappears with no issues, and the inputs
// appear as well, its also time to give the modal the ability to create an object using
// the Task class creator, and append that to the DOM. That should be... called
// by and in the modal module? IDK. Or here?

// Once the modal is able to create a task, automate the creation of a card.
// Would that be within the Task module? As a method of the Task class?

// Should the modal simply return a list of strings (The information for a Task object),
// which would then
// be used by Task? I think so. I would have to refactor Task to accept an array
// instead of multiple args.

// Then create a card using the Task object! Automate that... how?


// invoking a new card with object of class Task, allowing card function
// to handle creation and appending of Task to DOM.
card("cards", "project", exampleTask);
card("cards", "project", example_task_with_spaces);

// create a separate module for the popup form input, to create new tasks from the
// #add_task button. Use the "library" input form as an example to work from.

// figure out how to use local_storage module to save the added task to user's local
// storage.
