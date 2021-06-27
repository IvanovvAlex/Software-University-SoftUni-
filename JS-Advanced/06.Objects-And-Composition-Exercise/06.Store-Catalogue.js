// simple solition
function catalogue(array) {
    let products = [];

    for (const iteration of array) {
        let [name, price] = iteration.split(' : ');
        price = Number(price);

        let product = {
            name,
            price
        };

        products.push(product);
    }

    products = products.sort((a, b) => a.name.localeCompare(b.name));

    let resultString = '';
    let currentLetter = '';

    for (item of products) {
        if (item.name[0] != currentLetter) {
            currentLetter = item.name[0];
            resultString += currentLetter + '\n';
        }
        resultString += `  ${item.name}: ${item.price}\n`;
    }

    return resultString;
}

// methods solution
function catalogue(array) {
    let products = [];

    for (const iteration of array) {
        let [name, price] = iteration.split(' : ');
        price = Number(price);
        const firstLetter = name[0];

        if (!products[firstLetter]) {
            products[firstLetter] = [];
        }

        products[firstLetter].push({name, price});
        products[firstLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }

    let result = [];

    Object.entries(products).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
        .sort((a, b) => (a.name).localeCompare(b.name))
        .map(product => `  ${product.name}: ${product.price}`)
        .join('\n');

        let resultString = `${entry[0]}\n${values}`;
        result.push(resultString);
    })

    return result.join('\n');
}