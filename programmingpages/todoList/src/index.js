import "./style.css";
import Task from "./task.js"
import card from "./cardCreator.js";
// import { TaskInputFieldCreator, PopupFormButtons } from "./popupForm.js";
import HiddenModalElement from "./classPopup.js"

// Create separate "projects" or "lists" of ToDos, as well as a default "ToDo". 

// Separate application logic from DOM related stuff. Ie, creating new ToDos,
// setting ToDos as complete, changing ToDo priority should be separate from DOM
// related code

// Be able to:
//      View All Projects
//      View all ToDos in each project - maybe just title and due date
//          Perhaps change color for priority level
//      Expand single todo to see and edit its details
//      Delete a todo

// Consider using npm package date-fns for formatting and manipulating dates and times

// figure out how to use local_storage module to save the added task to user's local
// storage

// Manually adding 2 tasks, and creating an array from which to create the fields for
// this web page's form
// a manual use of the Task class to create a Task object.
let exampleTask = new Task("Testtask", "Description of task", "Aug 1", "0");

let example_task_with_spaces = new Task("Test Task", "This task has spaces", "Aug 1", "2");

// Creating array of form fields to use to create popupmodal
let modal_fields_array = [
    "Task Name",
    "Description of Task",
    "Due Date",
    "Priority",
];

// initialize a global array to use for tracking Task objects
let array_of_tasks = [];

array_of_tasks.push(exampleTask);
array_of_tasks.push(example_task_with_spaces);


// Create popup modal
let popup_modal = new HiddenModalElement("popup_modal", "modal", "add_task");
for (let x = 0; x < modal_fields_array.length - 1; x++) {
    popup_modal.add_input(modal_fields_array[x], "text");
};
popup_modal.add_input(modal_fields_array[3], "number");
popup_modal.append_to_parent();
popup_modal.add_buttons();


// Function to create task then card from input using popupmodal fields
function card_from_input() {
    let values_of_input_fields = [];
    values_of_input_fields.push(...popup_modal.return_field_values());
    console.log(values_of_input_fields);
    for (let x = 0; x < values_of_input_fields.length; x++) {
        if (values_of_input_fields[x] == "") {
            alert("Fields can not be empty");
            return;
        };
    };
    if (isNaN(values_of_input_fields[3])) {
        alert("The priority must be a number");
        return;
    }
    // Checks for duplicate task id, if so, denies user with alert, and exits function
    // without creating card
    let lower_and_no_space_input = values_of_input_fields[0].toLowerCase().replace(/\s/g, "");
    for (let x = 0; x < array_of_tasks.length; x++) {
        if (array_of_tasks[x].id == lower_and_no_space_input) {
            alert("There is already a task with this name");
            return;
        };
    };
    card(
        "cards",
        "project",
        new Task(...values_of_input_fields)
    );
    array_of_tasks.push(new Task(...values_of_input_fields))
    console.log(array_of_tasks);
    popup_modal.clear_fields();
};


// Submit buttons event listener to initiate card_from_input() function
let submit_buttons = [];
submit_buttons.push(...popup_modal.submit_buttons_array);
for (let x = 0; x < popup_modal.submit_buttons_array.length; x++) {
    submit_buttons[x].addEventListener("click", (e) => {
        card_from_input();
    });
};

// Adding clear form functionality
let clear_buttons = [];
clear_buttons.push(...popup_modal.clear_buttons_array);
for (let x = 0; x < clear_buttons.length; x++) {
    clear_buttons[x].addEventListener("click", (e) => {
        popup_modal.clear_fields();
    });
};


// invoking a new card with object of class Task, allowing card function
// to handle creation and appending of Task to DOM.
card("cards", "project", exampleTask);
card("cards", "project", example_task_with_spaces);