const plus = document.getElementById('plus');
const digit = document.querySelectorAll('.digit');
let value = document.querySelector('p.value');
let value2 = document.querySelector('p.value2');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
let op;



//shows number display when button is pressed
digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        value.textContent += digit.name;
    });
});

//Math operations
const addition = function add(a, b) {
        return a + b
};

const subtraction = function subtract(a, b) {
        return (a - b);
};

const multiplication = function multiply(a, b) {
        return (a * b);
};

const division = function divide(a, b) {
        return (a / b);
};

function operate(op, a, b) {
    if (op = addition) {
        return add(a,b);
    }
};


//must store first number when + is pressed 
//how to stop first numbers from adding onto value after + is pressed

equals.addEventListener('click', function operate(op, a, b) {
    console.log(value);
    console.log(value2);
})

ac.addEventListener('click', function() {
    value.innerHTML = '';
});