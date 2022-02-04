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
let numberButton = document.querySelector(".numberButton")
let result = document.querySelector(".result");
let addButton = document.querySelector("#addButton");
let numberField = document.querySelector(".numberField");//need to do document.getElementsByClassName('numberButton')
//need to do document.getElementBy????????????
//need some better variables I think

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
