function calculator() {
    let firstNumber;
    let secondNumber;
    let resultField;

    return {
        init: (selector1, selector2, result) => {
            firstNumber = document.querySelector(selector1);
            secondNumber = document.querySelector(selector2);
            resultField = document.querySelector(result);
        },
        add: () => {
            resultField.value = Number(firstNumber.value) + Number(secondNumber.value);
        },
        subtract: () => {
            resultField.value = Number(firstNumber.value) - Number(secondNumber.value);
        }
    }
}

const action = calculator();

const sumButton = document.getElementById('sumButton');
const subtractButton = document.getElementById('subtractButton');

action.init('#num1', '#num2', '#result');

sumButton.addEventListener('click', action.add);
subtractButton.addEventListener('click', action.subtract);