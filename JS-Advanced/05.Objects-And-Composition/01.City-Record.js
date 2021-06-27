function createCity(name, population, treasury) {
    const city = {
        name,
        population,
        treasury
    }

    return city;
}

result = createCity('Tortuga', 7000, 15000);
console.log(result);

resultTwo = createCity('Santo Domingo', 12000, 23500);
console.log(resultTwo);