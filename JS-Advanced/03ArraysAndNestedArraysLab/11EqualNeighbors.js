function equalNeighborsCount(matrixRows) {
    let matrix = matrixRows.map(row => row.split(' ').map(Number));
    let neighbors = 0;
    for (let row = 0; row < matrix.length-1; row++){
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                neighbors++;
            }
            if (matrix[row][col] == matrix[row][col + 1 + row]) {
                neighbors++;
            }
        }
    }
    return neighbors;
}