function Solve(arr){
let output = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
output.push(arr[i]);
    }
    else{
        output.unshift(arr[i]);
    }
}
for (let index = 0; index < output.length; index++) {
    const element = output[index];
    console.log(element);    
}
}