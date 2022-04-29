
//create Book prototype 
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


// const theFounding = new Book("Gaunt's Ghosts", "The Founding", "Dan Abnett", "Science Fiction", 200, true);
// const lotr = new Book("LOTR", "The Hobbit", "JRR", "Fantasy", 1000, true);
let myLibrary = [];
// console.log(myLibrary[0]);
// console.log(myLibrary[1]);

//adds book to card and array
function addBookToLibrary(libraryEntry) {
    const cards = document.querySelector("#cards");
    let project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project");
    project.id = libraryEntry.bookName;
    cardFromBook(libraryEntry);
    myLibrary.push(libraryEntry);
}

//creates card on page to display book entry
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

//used to share between testForExisting() function and readFormInput()
//to ensure duplicate books aren't added 
let keepGoing = false;

//tests input against existing book. Used in a loop to iterate through library
function testForExisting (input, testBook) {
    if (input == testBook) {
            alert("This book already exists!");
            document.getElementById("formPopUp").reset();
            keepGoing = true;
    }
}

/* Reads form input, tests input against existing myLibrary[] array
bookNames to ensure there is no duplicate, creates new Book object,
adds book object to library, resets form
*/
function readFormInput() {
    keepGoing = false;
    let bookNameElement = document.getElementById("bookName");
    let inputBookName = bookNameElement.value;
    let numberOfBooks = myLibrary.length;
    for (x = 0; x < numberOfBooks; x++) {
        // console.log(myLibrary[x].bookName);
        // console.log(inputBookName); 
        testForExisting(inputBookName, myLibrary[x].bookName);
    }
    if (keepGoing) {
        return;
    }
    else if (inputBookName == "") {
        return;
    }
    inputBookName = new Book ("Test", inputBookName, "test");
    // console.log(bookName);
    addBookToLibrary(inputBookName);
    document.getElementById("formPopUp").reset();
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
submitBook.addEventListener("keydown", function(e) {
    if (e.key == 'Enter') {
        readFormInput();
        formPopUp.style.display="none"}});
const submitAnotherBook = document.querySelector("#addAnotherBook");
submitAnotherBook.addEventListener("click", () => {
    readFormInput();
})
    


