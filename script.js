const plus = document.getElementById('plus');
const digit = document.querySelectorAll('.digit');
let value = document.querySelector('p.value');
const equals = document.getElementById('equals');


let operate = {
    addition: function add(a, b) {
        return a + b
    },
    subtraction: function subtract(a, b) {
        return (a - b);
    },
    multiplication: function multiply(a, b) {
        return (a * b);
    },
    division: function divide(a, b) {
        return (a / b);
    },
};

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        value.textContent += digit.name;
        console.log(value);
    });
});

plus.addEventListener('click', function (){
    value.textContent = '';
    console.log(value);
});
