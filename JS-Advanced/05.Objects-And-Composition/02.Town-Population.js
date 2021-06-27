function solve(array) {
    const towns = {};

    array.forEach(element => {
        const [key, value] = element.split(' <-> ');

        if (towns[key] == undefined) { 
            towns[key] = Number(value);
        } else {
            towns[key] += Number(value);
        }
    });

    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
