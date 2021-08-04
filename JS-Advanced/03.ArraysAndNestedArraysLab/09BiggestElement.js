function Solve(matrix){
    return matrix.reduce((max, currentRow, index, array) => 
    {
        for (const row of array) 
        {
            for (const num of row) 
            {
                if (num > max) 
                {
                    max = num                 
                }
            }         
        }
        return max;
    }, matrix[0][0]);
}