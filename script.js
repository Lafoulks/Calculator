const display = document.getElementById('#display');
const btns = document.querySelectorAll('.digit');
let value = document.querySelector('p');
const sub = document.getElementsByName('sub');
const plus = document.getElementsByName('plus');
const div = document.getElementsByName('divide');
const times = document.getElementsByName('multiply');

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

//Display numbers after button clicked. How to make multiple numbers appear instead of overwriting the first?
btns.forEach((btns) => {
    btns.addEventListener('click', function ()  {
        value.textContent += btns.name;
  });
});

//Store first # that is input when user chooses an operator, save which operation, then operate() on them once "=" is pressed
//After operate is called, update the display with the solution

