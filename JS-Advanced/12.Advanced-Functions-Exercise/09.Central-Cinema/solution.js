function solve() {
    const movieList = document.querySelector('#movies > ul');
    const onScreenButton = document.querySelector('#container > button');
    const arhiveList = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive > button');

    onScreenButton.addEventListener('click', addMovie);

    function addMovie(ev) {
        ev.preventDefault();

        const [name, hall, price] = [...document.querySelectorAll('#container  > input')]
        .map((el) => el.value);

        if (!name || !hall || !price) {
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;

        const strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        const innerStrong = document.createElement('strong');
        innerStrong.textContent = Number(price).toFixed(2);

        const input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.addEventListener('click', archive);

        div.appendChild(innerStrong);
        div.appendChild(input);
        div.appendChild(archiveButton);

        movieList.appendChild(li);

        function archive() {
            const soldTickets = input.value;
            const totalPrice = price * Number(soldTickets);

            if (typeof Number(soldTickets) == 'number' && Number(soldTickets) > 0) {
                li.removeChild(div);
                li.children[1].textContent = `Total amount: ${totalPrice.toFixed(2)}`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';

                li.appendChild(deleteButton);

                arhiveList.appendChild(li);

                deleteButton.addEventListener('click', (ev) => {
                    ev.target.parentNode.remove();
                });
            }

            clearButton.addEventListener('click', (ev) => {
                ev.target.parentNode.querySelector('ul>li').remove();
            });
        }
        
        [...document.querySelectorAll('#container  > input')]
        .map((el) => el.value = '');
    };
}