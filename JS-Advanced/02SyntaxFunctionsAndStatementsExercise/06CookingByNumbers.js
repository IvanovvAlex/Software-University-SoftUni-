function cookingOperator(inputNumber, firstOpr, secondOpr, thirdOpr, fourthOpr, fifthOpr) {
    let number = Number(inputNumber);
    let operations = [firstOpr, secondOpr, thirdOpr, fourthOpr, fifthOpr];
    operations.forEach(element => {
        if (element == 'chop') {
            number /= 2;
        } else if (element == 'dice') {
            number = Math.sqrt(number);
        } else if (element == 'spice') {
            number += 1;
        } else if (element == 'bake') {
            number *= 3;
        } else if (element == 'fillet') {
            number-=number*0.2;
        }
        console.log(number);
    });
}