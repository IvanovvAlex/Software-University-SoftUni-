function Solve(arr, start, end){
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end);
    let newArr = arr.slice(startIndex,endIndex+1);
    return newArr;
}

