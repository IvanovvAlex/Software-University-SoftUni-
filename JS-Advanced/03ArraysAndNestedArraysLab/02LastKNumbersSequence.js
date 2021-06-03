function solve(n, k)
{
    n = Number(n);
    k = Number(k);
    let arr = [1];
    for (let i = 1; i < n; i++) 
    {
        let toAdd = sum(arr,k);
        arr.push(toAdd);
    }

    function sum(arr, k) 
    {
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for (let i = 1; i <= k; i++)
        {
            sum += arr[arr.length - i];
        }
        return sum;
    }
    return arr;
}

