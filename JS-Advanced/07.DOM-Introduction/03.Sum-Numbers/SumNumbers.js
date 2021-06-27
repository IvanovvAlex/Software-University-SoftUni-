function calc() {
    const numberOne = Number(document.getElementById('num1').value);
    const numberTwo = Number(document.getElementById('num2').value);

    const result = numberOne + numberTwo;

    document.getElementById('sum').value = result;
}
