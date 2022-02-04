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
let result = document.querySelector(".result");
let addButton = document.querySelector("#addButton");
let numberField = document.querySelector(".numberField");

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
});

addButton.addEventListener('click', () => {
    if (nextNumber == null) {
        result = operate(add(lastNumber, lastNumber));
    }
});
