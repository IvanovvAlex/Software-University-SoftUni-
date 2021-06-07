function solve(arr)
{    
    return arr.reduce((result, currentValue,index,initial) =>
    {
        if (currentValue >= result[result.length - 1] || result.length === 0) 
        {
            result.push(currentValue);
        }
        return result;
    }, [])
}