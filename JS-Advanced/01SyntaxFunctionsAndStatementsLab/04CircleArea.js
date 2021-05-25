function Solve(arg){
    let typeOfArg = typeof(arg);
    if(typeOfArg == `number`){
console.log((Math.pow(arg, 2) * Math.PI).toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`);
    }

}