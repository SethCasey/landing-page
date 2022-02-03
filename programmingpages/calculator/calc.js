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
let //need to do document.getElementsByClassName('numberButton')
//need to do document.getElementBy????????????
//need some better variables I think

numberButton.addEventListener('click', () => {
    if (lastNumber == null) {
        lastNumber = numberButton.value;
    } else {
        nextNumber = numberButton.value;
    }
    console.log(lastNumber);
    console.log(nextNumber);
});

addition.addEventListener('click', add()) = () => {

};
