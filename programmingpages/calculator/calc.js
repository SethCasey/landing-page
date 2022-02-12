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
const chosenOperation = [];
let numberButtons = (document.querySelectorAll(".numberButton"))
let addButton = document.querySelector("#addButton");
let subtractButton = document.querySelector("#subtractButton");
let multiplyButton = document.querySelector("#multiplyButton");
let divideButton = document.querySelector("#divideButton");
let numberField = document.querySelector(".numberField");
let display = document.querySelector(".result")
let previousWork = document.querySelector(".previousWork");
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
        } else if (lastNumber && nextNumber && chosenOperation[0]) {
            result = operate(chosenOperation[0], parseInt(lastNumber), parseInt(nextNumber));
            updateDisplay(result);
            lastNumber = result;
            nextNumber = null;
            chosenOperation[0] = chosenOperation[1];
            chosenOperation[1] = null;
        } else {
        lastNumber = result;
        nextNumber = null;
        }
    })
});

addButton.addEventListener('click', () => {
    if (!chosenOperation[0]) {
        chosenOperation[0] = add;
    } else {
        chosenOperation[1] = add;
    }
});

subtractButton.addEventListener('click', () => {
    if (!chosenOperation[0]) {
       chosenOperation[0] = subtract; 
    } else {
    chosenOperation[1] = subtract; 
    }
});

multiplyButton.addEventListener('click', () => {
    if (!chosenOperation[0]) {
       chosenOperation[0] = multiply; 
    } else {
    chosenOperation[1] = multiply; 
    }
});

divideButton.addEventListener('click', () => {
    if (!chosenOperation[0]) {
       chosenOperation[0] = divide; 
    } else {
    chosenOperation[1] = divide; 
    }
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
        result = operate(chosenOperation[0], parseInt(lastNumber), parseInt(lastNumber));
    } else {
        result = operate(chosenOperation[0], parseInt(lastNumber), parseInt(nextNumber));
        console.log(result);
    }
    lastNumber = result;
    nextNumber = null;
    updateDisplay(result);
    chosenOperation[0, 1] = (null, null);
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

const updatePreviousWork = (input, operation) => {
}