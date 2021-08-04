function colorize() {
    const rows = document.querySelectorAll('table tr:nth-child(even)');

    for (let i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = 'teal';
    }
}