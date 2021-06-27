function filterEmployees(data, criteria) {

    let employees = JSON.parse(data);

    if (criteria !== 'all') {
        let [key, value] = criteria.split('-');

        employees = employees.filter(e => e[key] == value);
    }

    let result = [];
    let count = 0;

    employees.map(e => {
        result.push(`${count++}. ${e.first_name} ${e.last_name} - ${e.email}`);
    });

    console.log(result.join('\n'));
}

const data = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`

const criteria = 'last_name-Johnson';

filterEmployees(data, criteria);