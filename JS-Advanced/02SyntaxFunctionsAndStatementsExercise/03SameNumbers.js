function checkingDigitsInNumber(inputNumber) {
    let checker = true;
    let sum = 0;
    let controlDigit;
    while (inputNumber !== 0) {
        controlDigit = inputNumber % 10;
        sum += controlDigit;
        inputNumber = Math.floor(inputNumber/10);
        if (controlDigit !== inputNumber % 10&& inputNumber!==0) {
            checker = false;
        }
    }
    console.log(checker);
    console.log(sum);
}