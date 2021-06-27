function solution(number) {
    let num = number;

    function addToNumber(numberTwo) {
        let result = number + numberTwo;
        return result;
    }

    return addToNumber;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));