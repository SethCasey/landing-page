class Book {
    constructor(Series, Title, Author, Genre, Pages, status) {
        this.Series = Series;
        this.Title = Title;
        this.id = Title.replace(/\s/g, "");
        this.Author = Author;
        this.Genre = Genre;
        this.Pages = Pages;
        this.status = status;
        this.position = Library.length;
        Library.push(this);
        this.card();
        this.checkForDuplicate();
        //Unfortunately, the current implementation of checkForDuplicate(),
        //which calls the delete() function if needed,
        //and accordingly the 'delete' function, will delete the FIRST copy
        //that exists... Overwriting, essentially. I think this is OK? Maybe
        //even a feature to easily correct an incorrect input?
    };

    delete() {
        Library.splice(this.position, 1);
        let deleter = document.getElementById(`${this.id}`);
        deleter.remove();
        for (let x = 0; x < Library.length; x++) {
            Library[x].position = x;
        };
    };

    card() {
        let cards = document.querySelector("#cards");
        let project = document.createElement("div");
        cards.appendChild(project);
        project.classList.add("project");
        project.classList.add(`${this.id}`);
        project.id = this.id;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add(this.id);
        deleteButton.classList.add("deleteButton");
        project.appendChild(deleteButton);
        deleteButton.addEventListener("click", (e) => {
            this.delete();
        });


        let createH3 = document.createElement("h3");
        createH3.textContent = this.Series + ": " + this.Title;
        project.appendChild(createH3);


        let keys = Object.keys(this);
        let values = Object.values(this);
        for (let x = 0; x < keys.length; x++) {
            if (keys[x] == "id" || keys[x] == "status" || keys[x] == "position") {
                continue;
            } else {
                let createP = document.createElement("p");
                createP.textContent = keys[x] + ": " + values[x];
                project.appendChild(createP);
            };
        };

        let readStatus = document.createElement("button");
        readStatus.classList.add("readButton", this.status, this.id);
        if (this.status) { //if the book is "true" for status
            readStatus.innerHTML = "Read";
            project.classList.add("read");
        } else {
            readStatus.innerHTML = "Unread";
            project.classList.add("unread");
        };
        readStatus.addEventListener("click", (e) => {
            readStatus.classList.remove(this.status);
            if (this.status) {
                project.classList.remove("read");
                project.classList.add("unread");
                this.status = false;
                readStatus.innerHTML = ("Unread");
            } else {
                this.status = true;
                project.classList.remove("unread");
                project.classList.add("read");
                readStatus.innerHTML = "Read";
            };
            readStatus.classList.add(this.status);
        });
        project.appendChild(readStatus);
    };

    checkForDuplicate() {
        let countOfDuplicates = 0;
        for (let x = 0; x < Library.length; x++) {
            let bookComp = Library[x];
            if (this.id == bookComp.id) { countOfDuplicates++ };
            if (countOfDuplicates == 2) { this.delete(); };
        };
    };
};

let Library = [];
let theHobbit = new Book("LOTR", "The Hobbit", "JRR", "Fantasy", 400, false);
let theFounding = new Book("Gaunt's Ghosts", "Founding", "Dan Abnett", "Science Fiction", 200, true)


const series = document.getElementById("bookSeries");
const bookName = document.getElementById("bookName");
const bookAuthor = document.getElementById("bookAuthor");
const bookGenre = document.getElementById("bookGenre");
const pages = document.getElementById("pages");
const readStatus = document.getElementById("readStatus");


const addButton = document.getElementById("addBook");
const submitAnotherBook = document.getElementById("addAnotherBook");
const form = document.getElementById("formPopUp");
const closePopUp = document.getElementById("closePopUp");
const submitBook = document.getElementById("submitBook");


let input_fields = [];
input_fields.push(series, bookName, bookAuthor, bookGenre, pages);


bookAdd = (series, bookName, author, genre, pages, readStatus) => {
    new Book(series.value, bookName.value, author.value, genre.value, pages.value, readStatus.checked);
    series.value = "";
    bookName.value = "";
    author.value = "";
    genre.value = "";
    pages.value = "";
    readStatus.value = "";
};

check_field_value = (array_of_fields) => {
    for (let x=0; x<array_of_fields.length; x++) {
        if (array_of_fields[x].value) {
            continue;
        } else {
            return 0;
        }
    };
    return 1;
};

check_valid_values = (input) => {
    for (let x=0; x<input_fields.length; x++) {
        if (input.type == "text" && !input.value.length) {
            input.style.setProperty("box-shadow", "0 0 5px 1px red");
            input.setCustomValidity("This field must be filled out");
            input.reportValidity();
        } else if (input.id == "pages" && !input.value) {
            input.style.setProperty("box-shadow", "0 0 5px 1px red");
            input.setCustomValidity("This must be a numerical value");
            input.reportValidity();
        } else {
            input.style.setProperty("box-shadow", "none");
            continue;
        }
    }
}

add_input_validation = (input_fields) => {
    for(let x = 0; x < input_fields.length; x++) {
        input_fields[x].addEventListener("blur", function (event) {
            check_valid_values(input_fields[x]);
          });
    }
}


//form fields

const submit_form_event = (button_object, form_fields) => {
    button_object.addEventListener("click", (e) => {
        if (check_field_value(form_fields)) {
            bookAdd(series, bookName, bookAuthor, bookGenre, pages, readStatus);
        } else {
            alert("All fields must be filled out correctly");
        };
    });
    return;
};

function hide_and_show_click_event(button, form) {
    button.addEventListener("click", (e) => {
        if (form.classList.contains("visible")) {
            form.classList.remove("visible");
        } else {
            form.classList.add("visible");
            series.focus();
            series.select();
        };
    });
};


add_input_validation(input_fields);

submit_form_event(submitAnotherBook, input_fields);
submit_form_event(submitBook, input_fields);

hide_and_show_click_event(submitBook, form);
hide_and_show_click_event(closePopUp, form);
hide_and_show_click_event(addButton, form);