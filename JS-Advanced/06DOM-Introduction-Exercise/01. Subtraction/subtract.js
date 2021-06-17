function subtract() {    
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);

    let divRef = document.getElementById('result');
    divRef.textContent = firstNum-secondNum;
}