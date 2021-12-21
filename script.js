const display = document.getElementById('display');
const topRow = document.getElementById('top-row')
const btns = document.querySelectorAll('.digit');
let value1 = document.querySelector('p.value1');
let value2 = document.querySelector('p.value2');
const sub = document.getElementById('sub');
const plus = document.getElementById('plus');
const div = document.getElementById('div');
const times = document.getElementById('times');
const clear = document.getElementById('clear');
const ac = document.getElementById('ac');
const equals = document.getElementById('equals');


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

function operate(operator, a, b) {
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
        value1.textContent += btns.name;
  });
});


//Must store initial number before operation is clicked. How to make a new number instead of adding on to the first number?
//Save which operation, then have that operation be used in operate() when "=" is pressed
plus.addEventListener('click', function () {
    console.log(value1); 
    console.log(value2);
    value1.style.display = "none";
    //number buttons were not displaying again until I ran this code again
    //value2 is registering inputted numbers, but they are also added on to value1 still
    btns.forEach((btns) => {
        btns.addEventListener('click', function ()  {
            value2.textContent += btns.name;
      });
    });
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
    display.textContent = '';
});

clear.addEventListener('click', function () {
    //loop over btns and delete most recent one?
});

equals.addEventListener('click', function () {
    console.log(value1);
    console.log(value2);
    //maybe store operators into object to be called
});