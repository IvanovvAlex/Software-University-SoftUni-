class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping([name, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        this.budget -= price;
        this.products.push(name);

        return `You have successfully bought ${name}!`;
    }

    recipes({recipeName, productsList}) {
        if (productsList.some(x => this.products.includes(x) == false)) {
            throw new Error('We do not have this product');
        }

        this.dishes.push({ recipeName, productsList });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (this.dishes.some(d => d.recipeName == dish) == false) {
            throw new Error('We do not have this dish');
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];

        Object.entries(this.guests).forEach(([guestName, dish]) => {
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`);
        })

        return result.join('\n');
    }
}