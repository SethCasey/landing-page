const theFounding = new Book("Gaunt's Ghosts", "The Founding", "Dan Abnett", "Science Fiction", 200, true);


let myLibrary = ["Gaunt's Ghosts: The Founding", "Lord of the Rings: The Hobbit",
    theFounding];

function Book(bookSeries, bookName, bookAuthor, bookGenre, pages, readStatus) {
    this.bookSeries = "N/A";
    this.bookName = "N/A";
    this.bookAuthor = "N/A";
    this.bookGenre = "N/A";
    this.pages = "N/A";
    this.readStatus = false;
    this.info = function () {
        return (bookSeries + bookName + bookAuthor + bookGenre + pages + readStatus);
    }
}


function displayExamples(bookName) {
    const cards = document.querySelector("#cards");
    let project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project");
    project.id = bookName;
    fillCard(bookName, 'Lorem Ipsum');
}

function fillCard(bookName, description) {
    const selectingProject = document.getElementById(bookName);
    const createHeader = document.createElement('h3');
    createHeader.textContent = bookName;
    selectingProject.appendChild(createHeader);
    const createP = document.createElement('p');
    createP.textContent = description;
    selectingProject.appendChild(createP);
}

//the following is a test of the above 2 functions displayExamples()
//  and fillCard()

myLibrary.forEach(displayExamples);

function addBookToLibrary() {
}

//popup form controls
const addBookButton = document.getElementById("addBook");
const formPopUp = document.querySelector("#formPopUp");
addBookButton.addEventListener("click", () => {
    formPopUp.style.display = 'grid'});
const closePopUp = document.querySelector("#closePopUp");
closePopUp.addEventListener("click", () => formPopUp.style.display = "none");
const submitBook = document.querySelector("#submitBook");
submitBook.addEventListener("click", () => formPopUp.style.display="none")


/*I think I need to have the following elsewhere for some reason:

    const cards = document.getElementById("cards");
    const project = document.createElement("div");
    cards.appendChild(project);
    project.classList.add("project"); 
*/