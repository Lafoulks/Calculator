const DIGIT = document.querySelectorAll('.digit');
const ADD = document.getElementById('add');
const SUBTRACT = document.getElementById('subtract');
const MULTIPLY = document.getElementById('multiply');
const DIVIDE = document.getElementById('divide');
const EQUALS = document.getElementById('equals');
const AC = document.getElementById('ac');
let display = document.querySelector('p.value');
let op;
let currentOperation = [];
let previousOperation = [];
let result;

//1. Create functions for all the basic math operators

const ADDITION = (a, b) => a + b;
const SUBTRACTION = (a, b) => a - b;
const MULTIPLICATION = (a, b) => a * b;
const DIVISION = (a, b) => a / b;

//2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

let operate = function (op, a, b) {
    if (op == ADD) {
        return ADDITION(a, b);
    } else if (op == MULTIPLY) {
        return MULTIPLICATION(a, b);
    } else if (op == DIVIDE) {
        return DIVISION(a, b);
    } else if (op == SUBTRACT) {
        return SUBTRACTION(a, b);
    }
};

//3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. Add a display and a "clear" button.

AC.addEventListener('click', function() {
    display.innerHTML = '';
    currentOperation = [];
    previousOperation = [];
});

EQUALS.addEventListener('click', function () {
    result = operate(op, previousOperation, currentOperation);
    console.log(result);
    display.innerHTML = result;
});

//4. Create the functions that populate the display. Store the ‘display value’ in a variable somewhere for use in the next step.

DIGIT.forEach((DIGIT) => {
    DIGIT.addEventListener('click', function () {
        display.innerHTML += DIGIT.name;
        currentOperation = display.innerHTML;
        console.log(currentOperation);
    });
});

/*5. Store the first number that is input into the calculator when a user presses an operator. 
Save which operation has been chosen and then operate() on them when the user presses the “=” key.
Once operate has been called, update display with the solution*/

   MULTIPLY.addEventListener('click', function() {
        previousOperation.push(currentOperation);
        display.innerHTML = '';
        op = MULTIPLY;
    });

    SUBTRACT.addEventListener('click', function() {
        previousOperation.push(currentOperation);
        display.innerHTML = '';
        op = SUBTRACT;
    });

/* Pseudocode:
1) Num1 is clicked and stored in currentOperation.
2) Operand is clicked
    if (there is no value in previousOperation) {
        push currentOperation to previousOperation
        clear display
        next num entered will be new currentOperation
    }
3) Num2 is clicked and stored as currentOperation 
4) Equals button is clicked
        let result = operate(op, a, b)
        return result.display.innerHTML?
        ????
    
*/