function Solve(arr, n){
    for (let index = 0; index < n; index++) {
        arr.unshift(arr.pop());        
    }
    return arr.join(` `);
}
