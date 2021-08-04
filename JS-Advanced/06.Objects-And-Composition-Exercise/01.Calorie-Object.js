function caloriesObject(array) {
    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        let foodCalories = Number(array[i+1]);

        obj[array[i]] = foodCalories;
    }

    console.log(obj);
}

caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);