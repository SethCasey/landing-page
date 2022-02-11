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
let numberButtons = (document.querySelectorAll(".numberButton"))
let addButton = document.querySelector("#addButton");
let subtractButton = document.querySelector("#subtractButton");
let multiplyButton = document.querySelector("#multiplyButton");
let divideButton = document.querySelector("#divideButton");
let chosenOperation;
let numberField = document.querySelector(".numberField");
let display = document.querySelector(".result")
let clear = document.querySelector("#clearButton")
let operators = (document.querySelectorAll(".operators"))

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
    currentSelection = button.getAttribute("value");
    })
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(!lastNumber) {
            lastNumber = nextNumber;
            nextNumber = null;
        } else {
        lastNumber = result;
        nextNumber = null;
        }
    })
});

addButton.addEventListener('click', () => {
    chosenOperation = add;
});

subtractButton.addEventListener('click', () => {
    chosenOperation = subtract;
});

multiplyButton.addEventListener('click', () => {
    chosenOperation = multiply;
});

divideButton.addEventListener('click', () => {
    chosenOperation = divide;
});

numberField.addEventListener('click', () => {
    if (nextNumber == null) {
        nextNumber = currentSelection;
    } else {
        nextNumber += currentSelection;
    }
    console.log(lastNumber);
    console.log(nextNumber);
    updateDisplay(nextNumber);
});

equalsButton.addEventListener('click', () => {
    if (nextNumber == null) {
        //is there a way to store
        //the function chosen and use it here?
        //hmm
        result = operate(chosenOperation(lastNumber, lastNumber));
    } else if (nextNumber && lastNumber) {
        //how to use operator?
        result = operate(chosenOperation, parseInt(lastNumber), parseInt(nextNumber));
        console.log(result);
    }
    lastNumber = result;
    nextNumber = null;
    updateDisplay(result);
});

clear.addEventListener('click', () => {
    lastNumber = null;
    nextNumber = null;
    console.log(lastNumber);
    console.log(nextNumber);
    updateDisplay("Cleared!");
});

const updateDisplay = (input, operation) => {
    if (input && operation) {
        display.textContent += `${operation} ${input}`;
    } else {
        display.textContent = input;
    }
};