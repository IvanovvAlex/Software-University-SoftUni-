function subSum(array, startIndex, endIndex) {
    if (startIndex < 0) {
        startIndex = 0;
    }

    // This step is useless, because we get that functionality from slice, but anyway.
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    if (Array.isArray(array) == false) {
        return NaN;
    }

    // Slice stops before the last index that you give it, hence + 1;
    return array.slice(startIndex, endIndex + 1).reduce((a, c) => a + Number(c), 0);
}

console.log('Case 1:');
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log('Case 2:');
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('Case 3:');
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log('Case 4:');
console.log(subSum([], 1, 2));
console.log('Case 5:');
console.log(subSum('text', 0, 2));