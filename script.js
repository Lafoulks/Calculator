const digit = document.querySelectorAll('.digit');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
let display = document.querySelector('p.value');
let op = null;
let currentOperation;
let previousOperation;

//1. Create functions for all the basic math operators

let addition = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let multiplication = (a, b) => a * b;
let division = (a, b) => a / b;

//2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(op, a, b) {
    if (op = add) {
        return addition();
    } else if (op = multiply) {
        return multiplication();
    } else if (op = divide) {
        return division();
    } else if (op = subtract) {
        return subtraction()
    }
};

//3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. Add a display and a "clear" button.

ac.addEventListener('click', function() {
    display.innerHTML = '';
});

//4. Create the functions that populate the display. Store the ‘display value’ in a variable somewhere for use in the next step.

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        display.innerHTML += digit.name;
        currentOperation = display;
        //By changing num1 to display, I store the value for later use while keeping the display visible?
        console.log(currentOperation);
    });
});

//5. Store the first number that is input into the calculator when a user presses an operator, 
//Save which operation has been chosen and then operate() on them when the user presses the “=” key.
    //Once operate has been called, update display with the solution

    multiply.addEventListener('click', function() {
        if (currentOperation !== null) {
            previousOperation = currentOperation;
            currentOperation.innerHTML = '';
            console.log(previousOperation);
        };
    });

    equals.addEventListener('click', function () {
    });

 //user presses input, input stored in currentOperation
 //user presses operator
 //currentOperation is sent to previousOperation (check if previousOperation has anything there yet)
 //clear currentOperation so that it takes new inputs
 //if previousOperation has something, then that's the condition (to evaluate? does equals only display the result, and does not actually calcualte?)