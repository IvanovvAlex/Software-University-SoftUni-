class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }

        let car = {
            carModel,
            carNumber,
            paid: false
        }

        this.vehicles.push(car);

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let currentCar = this.vehicles.find(x => x.carNumber == carNumber);

        if (!currentCar) {
            throw new Error('The car, you\'re looking for, is not found.');
        }

        if (!currentCar.paid) {
            throw new Error(`${c} needs to pay before leaving the parking lot.`);
        }

        this.vehicles = this.vehicles.filter(x => x.carNumber != carNumber);

        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber){
        let currentCar = this.vehicles.find(x => x.carNumber == carNumber);

        if (!currentCar) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        if (currentCar.paid) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        currentCar.paid = true;

        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            return this.getFullStatistics();
        }

        currentCar = this.vehicles.find(x => x.carNumber == carNumber);

        return `${currentCar.carModel} == ${currentCar.carNumber} - ${car.paid ? 'Has payed' : 'Not payed'}`;
    }

    getFullStatistics() {
        let result = [];

        result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);

        let sortedVehicles = this.vehicles
        .slice()
        .sort((a, b) => a.carModel.localeCompare(b.carModel))
        .forEach(x => {
            result.push(`${x.carModel} == ${x.carNumber} - ${x.paid ? 'Has payed' : 'Not payed'}`);
        });

        return result.join('\n');
    }

    findCar(carNumber) {
        return this.vehicles.find(x => x.carNumber == carNumber);
    }
}