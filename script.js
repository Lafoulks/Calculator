const DIGIT = document.querySelectorAll('.digit');
const ADD = document.getElementById('add');
const SUBTRACT = document.getElementById('subtract');
const MULTIPLY = document.getElementById('multiply');
const DIVIDE = document.getElementById('divide');
const EQUALS = document.getElementById('equals');
const AC = document.getElementById('ac');
let display = document.querySelector('p.value');
let operand;
let currentNum;
let previousNum;
let result;
let temp;

const ADDITION = (a, b) => parseInt(a) + parseInt(b);
const SUBTRACTION = (a, b) => a - b;
const MULTIPLICATION = (a, b) => a * b;
const DIVISION = (a, b) => a / b;

let operate = function (operand, a, b) {
    if (operand == ADD) {
        return ADDITION(a, b);
    } else if (operand == MULTIPLY) {
        return MULTIPLICATION(a, b);
    } else if (operand == DIVIDE) {
        return DIVISION(a, b);
    } else if (operand == SUBTRACT) {
        return SUBTRACTION(a, b);
    }
};

//Displays button values

DIGIT.forEach((DIGIT) => {
    DIGIT.addEventListener('click', function () {
        display.innerHTML += DIGIT.name;
        currentNum = display.innerHTML;
    });
});

//Operand functionality

MULTIPLY.addEventListener('click', function() {
    operand = MULTIPLY;
        if (previousNum && currentNum) {
        temp = operate(operand, previousNum, currentNum);
        console.log(temp);
        previousNum = temp; 
        display.innerHTML = '';
    } else {
        previousNum = currentNum;
        display.innerHTML = '';
    }      
});

SUBTRACT.addEventListener('click', function() {
    operand = SUBTRACT;
    if (previousNum && currentNum) {
        temp = operate(operand, previousNum, currentNum);
        previousNum = temp; 
        display.innerHTML = '';
    } else {
        previousNum = currentNum;
        display.innerHTML = '';
    }
});

ADD.addEventListener('click', function() {
    operand = ADD;
    if (previousNum && currentNum) {
        temp = operate(operand, previousNum, currentNum);
        console.log(temp);
        previousNum = temp; 
        display.innerHTML = '';
    } else {
        previousNum = currentNum;
        display.innerHTML = '';
    }
});

DIVIDE.addEventListener('click', function() {
    operand = DIVIDE;
    if (previousNum && currentNum) {
        temp = operate(operand, previousNum, currentNum);
        console.log(temp);
        previousNum = temp; 
        display.innerHTML = '';
    } else {
        previousNum = currentNum;
        display.innerHTML = '';
    }
});

EQUALS.addEventListener('click', function () {
    result = operate(operand, previousNum, currentNum);
    display.innerHTML = result.toFixed(2);
    if (display.innerHTML === "Infinity") {
        display.innerHTML = "Are you trying to break it?!"
    }
});

AC.addEventListener('click', function() {
    display.innerHTML = '';
    currentNum = '';
    previousNum = '';
});
    
