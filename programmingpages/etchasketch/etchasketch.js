//etch a sketch, with a twist

const keepGoing = 1; //for loop control

const grid = document.querySelector('#game');

grid.style.display = 'flex';
grid.style.flexDirection = 'column';
const line = [];
let size;
let colorValue;
let square;
let squareId;

//const line = document.createElement('div');
//need to move this createElement somewhere more productive!

createSquare = (lineNumber) => { //creates a single div as defined within
    square = document.createElement('div');
    square.classList.add('square');
    console.log(`s${squareId}`);
    square.setAttribute('id', `s${squareId}`); //adds unique ID to each square
    squareId++;
    square.style.padding = `${size}%`;
    square.style.backgroundColor = `#${colorValue}`;
    line[lineNumber].appendChild(square);
};

createRowOfSquares = (input) => {
    for (i = 0; i < input; i++) {
        createSquare(input);
    }
};

divCreator = (lineNumber) => {
    line[lineNumber] = document.createElement('div');
    line[lineNumber].classList.add(lineNumber);
    line[lineNumber].style.display = 'flex';
    line[lineNumber].style.flexDirection = 'row';
    line[lineNumber].style.flexWrap = 'nowrap';
    game.appendChild(line[lineNumber]);
}

createRows = (numberOfRows) => {
    line[numberOfRows];
    size = 80/numberOfRows;//chose 80 because it fits my browser properly
    colorValue = 999999;
    squareId = 0;
    for (k = 0; k < numberOfRows; k++) {
        divCreator(numberOfRows);
        createRowOfSquares(numberOfRows);
    }
};


createRows(4);

