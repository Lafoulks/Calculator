const plus = document.getElementById('plus');
const digit = document.querySelectorAll('.digit');
let value1 = document.querySelector('p.value1');

let operations = {
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
}

digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        value1.textContent += digit.name;
    });
});