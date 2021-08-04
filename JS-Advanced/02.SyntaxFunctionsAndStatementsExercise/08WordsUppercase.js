function convertToUppercase(inputStr){
    let result = inputStr
    .toUpperCase()
    .match(/\w+/g)
    .join(', ');
    console.log(result);
 }