function solve(inputArr) {
    let x1 = Number(inputArr[0]);
    let y1 = Number(inputArr[1]);
    let x2 = Number(inputArr[2]);
    let y2 = Number(inputArr[3]);

    function distance(x1, y1, x2, y2) {
        let xLine = x1 - x2;
        let yLine = y1 - y2;
        return Math.sqrt(Math.pow(xLine, 2) + Math.pow(yLine, 2));
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}