//etch a sketch, with a twist

const keepGoing = 1; //for loop control

const grid = document.querySelector('#game');

grid.style.display = 'flex';
grid.style.flexDirection = 'column';
const line = [];
let size;
//const line = document.createElement('div');
//need to move this createElement somewhere more productive!

createSquare = (lineNumber) => { //creates a single div as defined within
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.padding = `${size}%`;
    square.style.backgroundColor = "#999999";
    //square.setAttribute('style', 'border: 25px solid white;');
    square.style.margin = '1px';
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
    size = 75/numberOfRows;//chose 75 because it fits my browser properly
    console.log(size);
    for (k = 0; k < numberOfRows; k++) {
        divCreator(numberOfRows);
        createRowOfSquares(numberOfRows);
    }
};


createRows(10);
