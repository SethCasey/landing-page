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
        } else {
            readStatus.innerHTML = "Unread";
        };
        readStatus.addEventListener("click", (e) => {
            readStatus.classList.remove(this.status);
            if (this.status) {
                this.status = false;
                readStatus.innerHTML = ("Unread");
            } else {
                this.status = true;
                readStatus.innerHTML = "Read";
            };
            readStatus.classList.add(this.status);
        });
        project.appendChild(readStatus);
    };

    checkForDuplicate () {
        let countOfDuplicates = 0;
        for (let x = 0; x < Library.length; x++) {
            let bookComp = Library[x];
            if (this.id == bookComp.id) {countOfDuplicates++};
            if (countOfDuplicates == 2) {this.delete();};
        };
    };
};

let Library = [];

let theHobbit = new Book("LOTR", "The Hobbit", "JRR", "Fantasy", 400, false);
let theFounding = new Book("Gaunt's Ghosts", "Founding", "Dan Abnett", "Science Fiction", 200, true)

bookAdd = (series, bookName, author, genre, pages, readStatus) => {
    new Book(series.value, bookName.value, author.value, genre.value, pages.value, readStatus.checked);
    series.value = "";
    bookName.value = "";
    author.value = "";
    genre.value = "";
    pages.value = "";
    readStatus.value = "";
};

//popup form
const addBookButton = document.getElementById("addBook");
const formPopUp = document.querySelector("#formPopUp");
addBookButton.addEventListener("click", () => {
    formPopUp.style.display = 'grid'});
const closePopUp = document.querySelector("#closePopUp");
closePopUp.addEventListener("click", (e) => formPopUp.style.display = "none");
const submitBook = document.querySelector("#submitBook");
//form fields
let series = document.getElementById("bookSeries");
let bookName = document.getElementById("bookName");
let author = document.getElementById("bookAuthor");
let genre = document.getElementById("bookGenre");
let pages = document.getElementById("pages");
let readStatus = document.getElementById("readStatus");
submitBook.addEventListener("click", (e) => {
    bookAdd(series, bookName, author, genre, pages, readStatus);
    formPopUp.style.display="none"});

formPopUp.addEventListener("keydown", function(e) {
    if (e.key == 'Enter') {
        bookAdd(series, bookName, author, genre, pages, readStatus)
        formPopUp.style.display="none"
    };
});
const submitAnotherBook = document.querySelector("#addAnotherBook");
submitAnotherBook.addEventListener("click", () => {
    bookAdd(series, bookName, author, genre, pages, readStatus);
});