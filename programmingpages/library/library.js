
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
function addBookToLibrary(inputBookName) {
    myLibrary.push(inputBookName); //add book to myLibrary array
    console.log(inputBookName.bookName)
    const cards = document.querySelector("#cards");
    let project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project");
    project.id = inputBookName.bookName;
    cardFromBook(inputBookName);
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
    let inputBookSeriesElement = document.getElementById("bookSeries");
    let inputBookSeries = inputBookSeriesElement.value;
    let inputBookAuthorElement = document.getElementById("bookAuthor");
    let inputBookAuthor = inputBookAuthorElement.value;
    let inputBookGenreElement = document.getElementById("bookGenre");
    let inputBookGenre = inputBookGenreElement.value;
    let inputBookPagesElement = document.getElementById("pages");
    let inputBookPages = inputBookPagesElement.value;
    let inputBookReadStatusElement = document.getElementById("readStatus");
    let inputBookReadStatus = inputBookReadStatusElement.value;
    myLibrary.inputBookName = new Book (inputBookSeries, inputBookName,
        inputBookAuthor, inputBookGenre, inputBookPages, inputBookReadStatus);
    addBookToLibrary(myLibrary.inputBookName);
    // console.log(bookName);
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
    


