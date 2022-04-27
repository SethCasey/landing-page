let myLibrary = ["Gaunt's Ghosts: The Founding", "Lord of the Rings: The Hobbit"];

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

function Book() {
    //the constructor
}

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