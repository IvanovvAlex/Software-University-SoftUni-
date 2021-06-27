const pizzUni = require('./pizza-place');
const { expect, assert } = require('chai');

describe('pizza place tests', () => {
    describe('makeAnOrder test', () => {
        it('should return confirmation message when pizza and drink is ordered', () => {
            let obj = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Coke'
            }

            assert.equal(pizzUni.makeAnOrder(obj), `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`);
        })

        it('should return confirmation message when pizza is ordered', () => {
            let obj = {
                orderedPizza: 'Margaritta',
            }

            assert.equal(pizzUni.makeAnOrder(obj), `You just ordered ${obj.orderedPizza}`);
        })

        it('should throw error with empty object', () => {
            let obj = {};

            assert.throws(() => pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.');
        })

        it('should throw error with only drink object', () => {
            let obj = {
                orderedDrink: 'Coke'
            };

            assert.throws(() => pizzUni.makeAnOrder(obj), 'You must order at least 1 Pizza to finish the order.');
        })

        it('should throw error with empty input', () => {
            assert.throws(() => pizzUni.makeAnOrder());
        })
    })

    describe('getRemainingWork test', () => {
        it('should return all orders completed when one ready status is given', () => {
            let statusArray = [
                { pizzaName: 'Margaritta', status: 'ready' }
            ]

            assert.equal(pizzUni.getRemainingWork(statusArray), 'All orders are complete!');
        })

        it('should return all orders completed when ready status is given', () => {
            let statusArray = [
                { pizzaName: 'Margaritta', status: 'ready' },
                { pizzaName: 'Italiana', status: 'ready' }
            ]

            assert.equal(pizzUni.getRemainingWork(statusArray), 'All orders are complete!');
        })

        it('should return still preparing when preparing status is given', () => {
            let statusArray = [
                { pizzaName: 'Margaritta', status: 'ready' },
                { pizzaName: 'Italiana', status: 'preparing' }
            ]

            assert.equal(pizzUni.getRemainingWork(statusArray), `The following pizzas are still preparing: Italiana.`);
        })

        it('should return still preparing when preparing status is given to all', () => {
            let statusArray = [
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Italiana', status: 'preparing' }
            ]

            assert.equal(pizzUni.getRemainingWork(statusArray), `The following pizzas are still preparing: Margaritta, Italiana.`);
        })
    })

    describe('orderType test', () => {
        it('should return total sum when type of order is delivery', () => {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
        })

        it('should return total sum when type of order is delivery using floating number', () => {
            assert.equal(pizzUni.orderType(100.50, 'Delivery'), 100.50);
        })

        it('should return discount sum when type of order is carry out', () => {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 90);
        })

        it('should return discount sum when type of order is carry out using floating number', () => {
            assert.equal(pizzUni.orderType(100.50, 'Carry Out'), 90.45);
        })
    })

})