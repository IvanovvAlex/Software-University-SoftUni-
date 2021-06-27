function findLowestPrices(array) {
    let products = {};

    for (const iteration of array) {
        let [town, product, price] = iteration.split(' | ');
        price = Number(price);

        if (products[product]) {
            products[product] = products[product].price <= price ? products[product] : { town, price };
        } else {
            products[product] = { town, price }
        }
    };

    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`)
    };

}

findLowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);