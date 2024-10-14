function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

const screen = document.querySelector(".screen");
let display = screen.textContent;

function updateDisplay() {
    const nums = document.querySelectorAll(".num");
    nums.forEach((num) => {
        num.addEventListener("click", () => {
            if (display == 0) {
                display = num.textContent
            } else {
                display += num.textContent
            }
            screen.textContent = display;
        });
    });
}

updateDisplay();
