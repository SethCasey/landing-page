//etch a sketch, with a twist

const keepGoing = 1; //for loop control

const grid = document.querySelector('.game');

grid.style.display = 'flex';
grid.style.flexDirection = 'column';
const line = [];
let size;
let colorValue = 999999;
let square;
let squareId;

//const line = document.createElement('div');
//need to move this createElement somewhere more productive!
//createSquare creates each individual square with properties as indicated
createSquare = (lineNumber) => { //creates a single div as defined within
    square = document.createElement('div');
    square.classList.add('square');
    //console.log(`s${squareId}`);
    //square.setAttribute('id', `s${squareId}`); //adds unique ID to each square
    //squareId++;
    square.style.padding = `${size}%`;
    //square.style.backgroundColor = `#${colorValue}`;
    line[lineNumber].appendChild(square);
    square.addEventListener("mouseover", (e) => {
        square.classList.add("touched");
    });
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
    grid.appendChild(line[lineNumber]);
}

createRows = (numberOfRows) => {
    const game = document.querySelector(".game");
    grid.style.display = 'flex';
    grid.style.flexDirection = 'column';
    line[numberOfRows];
    size = 80/numberOfRows;//chose 80 because it fits my browser properly
    squareId = 0;
    for (k = 0; k < numberOfRows; k++) {
        divCreator(numberOfRows);
        createRowOfSquares(numberOfRows);
    }
    const allOfTheSquares = document.querySelectorAll(".square");
    allOfTheSquares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            square.classList.add("touched"); //this works rudimentarily....
            //newColor = changeColor(colorValue);
            //square.style.backgroundColor = `#${newColor}`;
        });
    });
};

changeColor = (colorValue) => {
    newColor = colorValue-10000;
    return newColor;
}


createRows(100); //creates default grid of 10x10;

/*I really can't figure out the reset right now. I'm going to move on, annd maybe one day come back to try again
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = "Reset the Grid!";
body.insertBefore(button, grid);
//button.onclick = () => {
    body.removeChild(grid);
    newGrid = document.createElement('div');
    newGrid.classList.add('game');
    body.appendChild(newGrid);
    gameSelector = document.querySelector('.game');
    gameSelector.style.display = 'flex';
    gameSelector.style.flexDirection = 'column';
    
    let newGridNumber = prompt("What would you like the width to be?");
    createRows(newGridNumber);

}
*/