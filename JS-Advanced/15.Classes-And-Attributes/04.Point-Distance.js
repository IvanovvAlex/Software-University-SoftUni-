class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        if (!(pointOne instanceof Point) || !(pointTwo instanceof Point)) {
            throw new TypeError('Parameters must be of type Point!');
        }

        return Math.sqrt((pointOne.x - pointTwo.x) ** 2 + (pointOne.y - pointTwo.y)**2);
    }
}

let pointOne = new Point(6, 6);

let pointTwo = new Point(7, 8);

console.log(Point.distance(pointOne, pointTwo));