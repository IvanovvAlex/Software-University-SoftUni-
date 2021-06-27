function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const output = document.querySelector('#bestRestaurant>p');
   const workersOutput = document.querySelector('#workers>p');

   function onClick() {
       const input = JSON.parse(document.querySelector('#inputs textarea').value);

       const restaurants = {};

       input.forEach(el => {

           const [restaurantName, restaurantData] = el.split(' - ');
           const workersData = restaurantData.split(', ');

           let workers = [];

           for (const iteration of workersData) {
               const [name, salary] = iteration.split(' ');

               const worker = {
                   name,
                   salary,
               }

               workers.push(worker);
           }

           if (restaurants[restaurantName]) {
               workers = workers.concat(restaurants[restaurantName].workers);
           };

           workers.sort((a, b) => b.salary - a.salary);

           const averageSalary = workers.reduce((sum, worker) => sum + Number(worker.salary), 0) / workers.length;

           const bestSalary = Number(workers[0].salary);

           restaurants[restaurantName] = {
               workers,
               averageSalary,
               bestSalary,
           }
       });

       let bestRest = undefined;
       let bestSalary = 0;

       for (const restaurant in restaurants) {
           let currAvgSalary = restaurants[restaurant].averageSalary;

           if (restaurants[restaurant].averageSalary > bestSalary) {
               bestSalary = currAvgSalary;
               bestRest = restaurant;
           }
       }

       const bestRestaurant = restaurants[bestRest];

       output.textContent = `Name: ${bestRest} 
       Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} 
       Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

       let workersText = [];

       bestRestaurant.workers.forEach(w => {
           workersText.push(`Name: ${w.name} With Salary: ${w.salary}`)
       });

       workersOutput.textContent = workersText.join(' ');
   }
}