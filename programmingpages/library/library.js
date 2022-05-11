
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

const theHobbit = new Book("LOTR", "TheHobbit", "The", "Hobbit", "10", "read");
const testBook = new Book("This", "Book", "may", "genre", "2", "unread");
const theFounding = new Book("Gaunt's Ghosts", "Founding", "Dan Abnett", "Science Fiction", "200", "read");
const theTwoTowers = new Book("LOTR", "TheTwoTowers", "JRR", "Fantasy", "40", "unread");

bookList = [theHobbit, testBook, theFounding, theTwoTowers]

Book.prototype = Object.create(Book.prototype);
// let myLibrary = [theHobbit, testBook, theFounding, theTwoTowers];
let myLibrary = []


// myLibrary.forEach(displayExamples);
bookList.forEach(addBookToLibrary);

//adds book to card and array
function addBookToLibrary(inputBookName) {
    myLibrary.push(inputBookName); //add book to myLibrary array
    // console.log(inputBookName.bookName)
    const cards = document.querySelector("#cards");
    let project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project");
    project.classList.add(`${inputBookName.bookName}`);
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
    /*is there a better way to add a toggle button for read status?*/
    const createreadStatusButton = document.createElement("button");
    createreadStatusButton.classList.add("readButton", eachBook.readStatus);
    let readButtonText = document.createTextNode(eachBook.readStatus);
    createreadStatusButton.addEventListener("click", () => {
        if (eachBook.readStatus == "unread") {
            eachBook.readStatus = "read";
            createreadStatusButton.classList.add("read");
            createreadStatusButton.classList.remove("unread");
            console.log("Changed to read");
        } else {
            eachBook.readStatus = "unread";
            createreadStatusButton.classList.add("unread");
            createreadStatusButton.classList.remove("read");
            console.log("Changed to unread");
        };
        readButtonText.nodeValue=eachBook.readStatus;
    })
    createreadStatusButton.appendChild(readButtonText);
    selectingProject.appendChild(createreadStatusButton);
    const deleteThisProject = document.createElement("button");
    deleteThisProject.classList.add("deleteProject");
    let deleteButtonText = document.createTextNode("Delete");
    deleteThisProject.onclick = () => {
        cardsElement = document.getElementById("cards");
        cardsElement.removeChild(selectingProject);
        myLibrary.pop(bookName);
        console.log(myLibrary);
    }
    deleteThisProject.appendChild(deleteButtonText);
    selectingProject.append(deleteThisProject);

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

/* reads form input, tests input against existing myLibrary[] array
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
    /*need to figure out why spaces in names throws error - figure it out!*/
    let inputBookSeriesElement = document.getElementById("bookSeries");
    let inputBookSeries = inputBookSeriesElement.value;
    let inputBookAuthorElement = document.getElementById("bookAuthor");
    let inputBookAuthor = inputBookAuthorElement.value;
    let inputBookGenreElement = document.getElementById("bookGenre");
    let inputBookGenre = inputBookGenreElement.value;
    let inputBookPagesElement = document.getElementById("pages");
    let inputBookPages = inputBookPagesElement.value;

///Gotta work here to figure out how to best get the read status of a book from 
////the unsubmitted form! Check box kinda ain't great! Maybe radio buttons instead?


    let inputBookreadStatusElement = document.getElementById("readStatus");
    let inputBookreadStatus = inputBookreadStatusElement.value;
    myLibrary.inputBookName = new Book (inputBookSeries, inputBookName,
        inputBookAuthor, inputBookGenre, inputBookPages, inputBookreadStatus);
    addBookToLibrary(myLibrary.inputBookName);
    // console.log(bookName);
    document.getElementById("formPopUp").reset();
}

function readButtonToggle(input) {
    console.log("Clicked button!");
    if (input == "unread"){
        input.textContent = "read"
        input.style.backgroundColor = "red";
    } else {
        input.textContent = "unread"
    }
}




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

//event listeners; control for read status



