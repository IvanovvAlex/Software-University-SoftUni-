function Solve(arr){
    let output = arr.sort((a, b) => a - b);
    let outputLength = Math.floor(output.length/2);
    if (output.length%2 == 0) {        
        for (let index = 0; index < output.length/2; index++) {
            output.shift();            
        }
    } else {
        for (let index = 0; index < Math.ceil(output.length/2); index++) {
            output.shift();            
        } 
    }
    return output;
}