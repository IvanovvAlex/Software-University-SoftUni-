function Solve(arr){
    arr = arr.sort((a, b) => a.localeCompare(b));
    let i = 1;
    for (const element of arr) {
        console.log(`${i++}.${element}`);
    }
}