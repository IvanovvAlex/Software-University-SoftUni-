function createCity(name, population, treasury) {
    const city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession: function(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    }

    return city;
}

const city = 
  createCity('Tortuga',
  7000,
  15000);

console.log('treasury:');
console.log(city.treasury);
city.collectTaxes();
console.log(city.treasury);

console.log('population:');
console.log(city.population);
city.applyGrowth(5);
console.log(city.population);