let Library = [];

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
            Library.splice(this.position, 1);
            let deleter = document.getElementById(`${this.id}`);
            deleter.remove();
            for (let x = 0; x < Library.length; x++) {
                Library[x].position = x;
            };
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
};

let theHobbit = new Book("LOTR", "The Hobbit", "JRR", "Fantasy", 400, false);
let theFounding = new Book("Gaunt's Ghosts", "Founding", "Dan Abnett", "Science Fiction", 200, true)


