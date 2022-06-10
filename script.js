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

//1. Create functions for all the basic math operators

const ADDITION = (a, b) => parseInt(a) + parseInt(b);
const SUBTRACTION = (a, b) => a - b;
const MULTIPLICATION = (a, b) => a * b;
const DIVISION = (a, b) => a / b;

//2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

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

//3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. Add a display and a "clear" button.

AC.addEventListener('click', function() {
    display.innerHTML = '';
    currentNum = '';
    previousNum = '';
});

EQUALS.addEventListener('click', function () {
    result = operate(operand, previousNum, currentNum);
    display.innerHTML = result;
    if (display.innerHTML === "Infinity") {
        display.innerHTML = "Are you trying to break it?!"
    }
});

//4. Create the functions that populate the display. Store the ‘display value’ in a variable somewhere for use in the next step.

DIGIT.forEach((DIGIT) => {
    DIGIT.addEventListener('click', function () {
        display.innerHTML += DIGIT.name;
        currentNum = display.innerHTML;
    });
});

/*5. Store the first number that is input into the calculator when a user presses an operator. 
Save which operation has been chosen and then operate() on them when the user presses the “=” key.
Once operate has been called, update display with the solution*/

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
/*
CHAINING D:
currentNum is entered
operand is pressed
currentNum is passed to previousNum, allowing for new input
input is stored as currentNum 
operand is pressed again
    if there is current and previousNum, operate is called
    operate value is stored in temp
    temp is pushed to previousNum
    new input is pushed to currentNum

)

*/