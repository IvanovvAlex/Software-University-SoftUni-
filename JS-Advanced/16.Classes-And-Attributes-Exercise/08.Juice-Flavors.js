function juiceStore(array) {
    const juiceBottles = new Map();

    array.reduce((acc, value) => {
        let [juiceName, juiceQuantity] = value.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (!acc.hasOwnProperty(juiceName)) {
            acc[juiceName] = 0;
        }

        acc[juiceName] += juiceQuantity;

        if (acc[juiceName] >= 1000) {
            if (!juiceBottles.has(juiceName)) {
                juiceBottles.set(juiceName, 0);
            }

            juiceBottles.set(juiceName, juiceBottles.get(juiceName) + parseInt(acc[juiceName] / 1000));
            acc[juiceName] = acc[juiceName] % 1000;
        }

        return acc
    }, {});

    juiceBottles.forEach((value, key) => {
        console.log(`${key} => ${value}`);
    })
}

result = juiceStore(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);

console.log(result);