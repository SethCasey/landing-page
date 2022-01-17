//etch a sketch, with a twist

const keepGoing = 1; //for loop control

const grid = document.querySelector('#game');
grid.style.display = 'flex';
grid.style.gap = '5px';
const line = document.createElement('div');

createSquare = (lineNumber) => { //creates a single div as defined within
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add(lineNumber);
    square.textContent = "Hellow world!";
    line.appendChild(square);
};

createRowOfSquares = (input) => {
    for (i = 0; i <= input; i++) {
        createSquare(input);
    }
};

divCreator = (lineNumber) => {
    line.classList.add(lineNumber);
    game.appendChild(line);
}

createRows = (numberOfRows) => {
    for (k = 0; k < numberOfRows; k++) {
        divCreator(numberOfRows);
        createRowOfSquares(numberOfRows);
    }
};

createRows(2);
