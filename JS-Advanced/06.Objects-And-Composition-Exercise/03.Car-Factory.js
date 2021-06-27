function createCar(carObject) {
    
    function getCarriage(type, color) {
        const carriages = [
            { type: 'hatchback', color: undefined },
            { type: 'coupe', color: undefined }   
        ];

        let carriage = carriages.find(carriage => carriage.type == type);
        carriage.color = color;

        return carriage;
    }

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];

        return engines.find(engine => engine.power >= power);
    }

    function getWheels(wheelSize) {
        wheelSize = Math.floor(wheelSize);
        wheelSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;

        return Array(4).fill(wheelSize, 0, 4);
    }

    let resultCar = {
        model: carObject.model,
        engine: getEngine(carObject.power, carObject.color),
        carriage: getCarriage(carObject.carriage, carObject.color),
        wheels: getWheels(carObject.wheelsize)
    }

    return resultCar;
}

result = createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });

console.log(result);