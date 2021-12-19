const display = document.getElementById('#display');
const topRow = document.getElementById('#top-row')
const btns = document.querySelectorAll('.digit');
let value = document.querySelector('p');
const sub = document.getElementById('sub');
const plus = document.getElementById('plus');
const div = document.getElementById('div');
const times = document.getElementById('times');
const clear = document.getElementById('clear');
const ac = document.getElementById('ac');

//Operations
function add(a, b) {
	return a + b
};
function subtract(a, b) {
	return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(operator, a, b,) {
    if (operator === add) {
        return (a + b);
    } else if (operator === subtract) {
        return (a -b);
    } else if (operator === multiply) {
        return (a * b);
    } else if (operator === divide) {
        return (a / b);
    }
};

//Displays numbers
btns.forEach((btns) => {
    btns.addEventListener('click', function ()  {
        value.textContent += btns.name;
  });
});

//Stores operations to operator buttons
plus.addEventListener('click', function () {
    add(a, b);
});

sub.addEventListener('click', function () {
    subtract(a, b);
});

times.addEventListener('click', function () {
    multiply(a, b);
});

div.addEventListener('click', function () {
    divide(a, b);
});

ac.addEventListener('click', function () {
    value.textContent = '';
});

clear.addEventListener('click', function () {
    //loop over btns and delete most recent one?
});

//Store first # that is input when user chooses an operator, save which operation, then operate() on them once "=" is pressed
//After operate is called, update the display with the solution
