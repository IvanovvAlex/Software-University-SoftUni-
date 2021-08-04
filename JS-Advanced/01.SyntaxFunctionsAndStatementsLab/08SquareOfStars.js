function Solve(size){
    let result = ``;
    if(size == undefined){
        for(let i = 0; i < 5; i++){
            for(let i = 0; i < 5; i++){
            result += `* `;
            } 
            result += `\n`
        }
    }
    else{
        for(let i = 0; i < size; i++){
            for(let i = 0; i < size; i++){
            result += `* `;
            } 
            result += `\n`
        }
    }
console.log(result);
}

Solve(2);