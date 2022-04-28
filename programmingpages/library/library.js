

function Book(bookSeries, bookName, bookAuthor, bookGenre, pages, readStatus) {
    this.bookSeries = bookSeries;
    this.bookName = bookName;
    this.bookAuthor = bookAuthor; 
    this.bookGenre = bookGenre;
    this.pages = pages;
    this.readStatus =  readStatus;
    this.info = function () {
        return (bookSeries + bookName + bookAuthor + bookGenre + pages + readStatus);
    }
}

Book.prototype = Object.create(Book.prototype);


const theFounding = new Book("Gaunt's Ghosts", "The Founding", "Dan Abnett", "Science Fiction", 200, true);
const lotr = new Book("LOTR", "The Hobbit", "JRR", "Fantasy", 1000, true);
let myLibrary = [theFounding, lotr];
// console.log(myLibrary[0]);
// console.log(myLibrary[1]);


function addBookToLibrary(libraryEntry) {
    const cards = document.querySelector("#cards");
    let project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project");
    project.id = libraryEntry.bookName;
    cardFromBook(libraryEntry);
}

function cardFromBook (eachBook) {
    const selectingProject = document.getElementById(eachBook.bookName);
    for (let [key, value] of Object.entries(eachBook)) {
        // console.log(key);
        if (key == "bookSeries" || key=="bookName") {
            const createH3 = document.createElement('h3');
            if (key=="bookSeries"){
            createH3.textContent = value+": ";
            } else {
                createH3.textContent = value;
            }
            selectingProject.appendChild(createH3);
        } else {
            const createP = document.createElement('p');
            if (key == "bookAuthor") {
                createP.textContent = "Author: "+value;
            } else if (key == "bookGenre") {
                createP.textContent = "Genre: "+value;
            } else if (key == "pages") {
                createP.textContent = "Pages: "+value;
            }
            selectingProject.appendChild(createP);
        }
    }
}

function testForExisting () {
    let bookNameElement = document.getElementById("bookName");
    let inputBookName = bookNameElement.value;
    if (inputBookName == bookName) {
            alert("This book already exists!");
            document.getElementById("formPopUp").reset();
    }
}

function readFormInput() {
    let bookNameElement = document.getElementById("bookName");
    let inputBookName = bookNameElement.value;
    myLibrary.forEach(testForExisting);
    inputBookName = new Book ("Test", inputBookName, "test");
    // console.log(bookName);
    addBookToLibrary(inputBookName);
}

// myLibrary.forEach(displayExamples);
myLibrary.forEach(addBookToLibrary);

//popup form controls
const addBookButton = document.getElementById("addBook");
const formPopUp = document.querySelector("#formPopUp");
addBookButton.addEventListener("click", () => {
    formPopUp.style.display = 'grid'});
const closePopUp = document.querySelector("#closePopUp");
closePopUp.addEventListener("click", () => formPopUp.style.display = "none");
const submitBook = document.querySelector("#submitBook");
submitBook.addEventListener("click", () => {
    readFormInput();

    formPopUp.style.display="none"});

