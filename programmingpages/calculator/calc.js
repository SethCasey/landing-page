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
let numberField = document.querySelector(".numberField");
let display = document.querySelector(".result")
let clear = document.querySelector("#clearButton")

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
    currentSelection = button.getAttribute("value");
    })
});

numberField.addEventListener('click', () => {
    if (lastNumber == null) {
        lastNumber = currentSelection;
    } else {
        nextNumber = currentSelection;
    }
    console.log(lastNumber);
    console.log(nextNumber);
    updateDisplay(currentSelection);
});

//errm okay so this works, but... I need it to update
//after I've hit equals, not before... hmm.
//Okay, I need to move the actual math to the equals 
//button? somehow... And pass the operation in too?
addButton.addEventListener('click', () => {
    if (nextNumber == null) {
        result = operate(add(lastNumber, lastNumber));
    } else if (nextNumber && lastNumber) {
        
    }
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