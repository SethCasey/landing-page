const add = (a, b) => {
    return (a + b);
};

const subtract = (a, b) => {
    return (a - b);
};

const multiply = (a, b) => {
    return (a * b);
};

const divide = (a, b) => {
    return (a / b);
};

const operate = (doStuff, a, b) => {
    let result = doStuff(a, b);
    return result;
};

let lastNumber = null;
let nextNumber = null;
let selectedNumber = null;
let currentSelection;
//this numberButton only returns the first numberButton...
//Gotta look up how to return ALL of the individuals buttons
//with their own value. Probably need to iterate/loop through
//them
let numberButton = document.querySelector(".numberButton")
let result = document.querySelector(".result");
let addButton = document.querySelector("#addButton");
let numberField = document.querySelector(".numberField");//need to do document.getElementsByClassName('numberButton')
//need to do document.getElementBy????????????
//need some better variables I think

//This only returns the first numberButton
//Fix it up top, but also need to loop through whatever array
//or node list gets created by using querySelectorAll or something
numberButton.addEventListener('click', () => {
    currentSelection = numberButton.getAttribute("value");
});

numberField.addEventListener('click', () => {
    if (lastNumber == null) {
        lastNumber = currentSelection;
    } else {
        nextNumber = currentSelection;
    }
    console.log(lastNumber);
    console.log(nextNumber);
});

addButton.addEventListener('click', () => {
    if (nextNumber == null) {
        result = operate(add(lastNumber, lastNumber));
    }
});
