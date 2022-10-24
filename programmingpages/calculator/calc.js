/* TODO: Simplify the code behind this program
 * Current idea - each button pushes its contents to a queue when it
 * is pressed... Number, operation, whatever
 * When enter is pressed, begin clearing queue, popping elements as it runs
 * When queue is empty, display result
 * While entering stuff, simply display the queue on the screen
 * Save the result of an operation as the only element in the queue once
 * operations are done to be displayed on the calculator screen
 */

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

const operate = (inpFunc, a, b) => return inpFunc(a, b);

let lastNumber = null;
let nextNumber = null;
let selectedNumber = null;
let currentSelection;
let queuedOperations = [];
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
let posNeg = document.querySelector("#posNeg")

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
    //currentSelection = button.getAttribute("value");
    queuedOperations.push(button.getAttribute("value");
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
        result = operate(chosenOperation[0], parseFloat(lastNumber), parseFloat(lastNumber));
    } else {
        result = operate(chosenOperation[0], parseFloat(lastNumber), parseFloat(nextNumber));
        console.log(result);
    }
    lastNumber = result;
    nextNumber = null;
    updateDisplay(lastNumber);
    chosenOperation[0] = null;
    chosenOperation[1] = null;
    console.log(`ChosenOperation[0] is ${chosenOperation[0]}`);
    console.log(`ChosenOperation[1] is ${chosenOperation[1]}`);
});

clear.addEventListener('click', () => {
    lastNumber = null;
    nextNumber = null;
    chosenOperation[0, 1] = (null, null);
    console.log(lastNumber);
    console.log(nextNumber);
    updateDisplay(0);
    
});

//okay there's something pretty wrong here. And I think it has to do
//with me switching things back and forth between strings and numbers.
//I don't think it works right with parseFloat. So maybe I need to 
//refactor by using strings only in the "display" function, and ensuring
//that I'm actually using numbers everywhere else
// posNeg.addEventListener('click', () => {
//         lastNumber = lastNumber*(-1);
//         updateDisplay(lastNumber);
//         console.log("lastNumber used");
//         chosenOperation[0, 1] = (null, null);
// });

const updateDisplay = (input, operation) => {
    if (input && operation) {
        display.textContent += `${operation} ${input}`;
        console.log("Update display used input && operation statement")
    } else {
        display.textContent = (`${input}`);
        console.log("update display used just input");
    }
};

const updatePreviousWork = (input, operation) => {
}
