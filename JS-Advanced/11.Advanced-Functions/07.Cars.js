function solve(array) {
    const vehicles = {};

    const createVehicle = function() {

        return {
            create: function(name, inherit, parentName) {
                vehicles[name] = inherit ? Object.create(vehicles[parentName]) : {};
            },
            set: function(name, key, value) {
                vehicles[name][key] = value;
            },
            print: function(name) {
                let logs = [];

                for (const key in vehicles[name]) {
                    logs.push(`${key}:${vehicles[name][key]}`);
                }

                console.log(logs.join(', '));
            }
        }
    }

    const action = createVehicle();

    array.map((el) => el.split(" ")).forEach(([arg, ...args]) => action[arg].apply(null, args));
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);