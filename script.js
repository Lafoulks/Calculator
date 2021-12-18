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

/*Create the functions that populate the display when you click the number buttons:
-Upon click, each button must input corresponding value
-Then value must show in display area
-Store the displayed number into the variable 'display-value' for later use
*/

//Function to display button values
const btns = document.querySelectorAll('.digit');
btns.forEach((btns) => {
    btns.addEventListener('click', function ()  {
        console.log(this.name);
  });
});
