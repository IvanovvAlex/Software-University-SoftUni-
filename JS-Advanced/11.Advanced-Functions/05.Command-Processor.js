function solution() {
    let string = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(stringToAppend) {
        string += stringToAppend; 
    }

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.slice(0, -n);
    }

    function print() {
        console.log(string);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();