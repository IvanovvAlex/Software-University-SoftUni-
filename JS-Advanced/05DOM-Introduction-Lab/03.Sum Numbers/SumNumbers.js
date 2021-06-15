function calc() {
    // TODO: sum = num1 + num2
    let firstNum = Number(document.querySelector('#num1').value);
    let secondNum = Number(document.querySelector('#num2').value);
    let sum = firstNum + secondNum;

    document.querySelector('#sum').value = sum; 

}
