const digit = document.querySelectorAll('.digit');
const plus = document.getElementById('plus');
const times = document.getElementById('times');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
let display = document.querySelector('p.value');
let op = null;

//1. Create functions for all the basic math operators

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

//2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(op, a, b) {
    if (op = addition) {
        return add(a,b);
    }
};

//3. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. Add a "clear" button

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        display.innerHTML += digit.name;
    });
});

ac.addEventListener('click', function() {
    display.innerHTML = '';
});

//4. Create the functions that populate the display when you click the number buttons
//Store the ‘display value’ in a variable somewhere for use in the next step.

//5. Store the first number that is input into the calculator when a user presses an operator, 
//Save which operation has been chosen and then operate() on them when the user presses the “=” key.

//All clear
