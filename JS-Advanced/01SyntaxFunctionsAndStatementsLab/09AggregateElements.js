function operator(arr) {
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);

    function aggregate(array, initVal, func) {
        let val = initVal;
        for (let i = 0; i < array.length; i++) {
            val = func(val, array[i]);
        }
        console.log(val);
    }
}