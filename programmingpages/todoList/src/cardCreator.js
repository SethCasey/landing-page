// Expand this function to create a full-fledged element on the page
// that has all the funcionality required of a ToDo/Task object
export default function card(container_element, card_class, TaskObject) {
    let container = document.getElementById(container_element);

    let card = document.createElement("div");
    card.setAttribute("class", card_class);
    // Add "priority" as class attr to allow sorting later?
    card.setAttribute("class", TaskObject.priority);
    card.setAttribute("id", TaskObject.id);

    let name_of_card = document.createElement("h3");
    name_of_card.textContent = TaskObject.name;
    card.appendChild(name_of_card);

    let description_of_card = document.createElement("p");
    description_of_card.textContent = TaskObject.description;
    card.appendChild(description_of_card);

    let due_date = document.createElement("p");
    due_date.textContent = TaskObject.due;
    card.appendChild(due_date);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Completed";
    checkbox.id = `${TaskObject.id}_checkbox`;
    checkbox.value = TaskObject.completed;
    checkbox.addEventListener("click", (e) => {
        if (TaskObject.completed == false) {
            checkbox.value = true;
            TaskObject.completed = true;
            card.style.setProperty("text-decoration", "line-through");
        } else {
            checkbox.value = false;
            TaskObject.completed = false;
            card.style.setProperty("text-decoration", "none");
        };
    })
    card.appendChild(checkbox);

    container.appendChild(card);

    return card;
};