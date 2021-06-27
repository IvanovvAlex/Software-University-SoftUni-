function solve(array, arg) {
    const sorting = {
        asc: (a, b) => (a - b),
        desc: (a, b) => (b - a)
    }

    return array.sort(sorting[arg]);
}

result = solve([14, 7, 17, 6, 8], 'asc');
secondResult = solve([14, 7, 17, 6, 8], 'desc');

console.log(result);
console.log(secondResult);