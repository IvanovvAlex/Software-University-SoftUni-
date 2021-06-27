function Solve(arr){
    let output = [];
    let num = 1;
    
for (const element of arr) {
    if (element === 'add') {
        output.push(num++);        
    }
    else if (element === 'remove') {    
        output.pop();
        num++;
    }
}
if (output.length == 0) {
    return "Empty";
}
else{
   return output.join(`\n`);
}
}
