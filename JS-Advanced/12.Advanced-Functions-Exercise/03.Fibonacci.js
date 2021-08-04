function getFibonator() {
    let numberOne = 0;
    let numberTwo = 1;

    return function fib() {
        let result = numberOne + numberTwo;
        numberOne = numberTwo;
        numberTwo = result;
        return numberOne;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());