function sortTickets(data, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];

    data.map(x => {
        let [destination, price, status] = x.split('|');
        let tempTicket = new Ticket(destination, price, status);
        tickets.push(tempTicket); 
    })

    const sortingCriterias = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    tickets.sort(sortingCriterias[criteria]);

    return tickets;
}

result = sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination');

console.log(result);