function colorize() {
    const trRef = document.querySelectorAll('tr');
    let counter = 1;
    for (const tr of trRef) {
        if (counter % 2 == 0) {
            tr.style.background = "Teal";
        }
        counter++;
    }
}