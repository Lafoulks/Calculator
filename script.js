const plus = document.getElementById('plus');
const digit = document.querySelectorAll('.digit');
let value = document.querySelector('p.value');
const equals = document.getElementById('equals');

//ask if this is the right way to store operators to be called upon in Operate function
const operators = {
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

//this shows visual of number pressed 
digit.forEach((digit) => {
    digit.addEventListener('click', function () {
        value.textContent += digit.name;
        console.log(value);
    });
});

//add value + a second value that will be tied to equal key? 
//so no add function tied to this plus button
plus.addEventListener('click', function add(a, b) {
    value.textContent = '';
    console.log(value);
});


//pull correct operator, use if/else to run though operator list? how to have it remember which operator was chosen?
function operate() {

};