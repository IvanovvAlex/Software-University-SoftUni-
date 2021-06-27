function generateReport() {
    const output = document.getElementById('output');
    const box = Array.from(document.querySelectorAll('thead th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const headers = document.querySelectorAll('thead th');

    let indexes = [];
    let result = [];

    box.forEach((b, index) => {
        if (b.checked == true) {
            indexes.push(index);
        }
    });

    for (const row of rows) {
        let obj = {};

        for (const index of indexes) {
            const value = row.children[index].textContent;
            const title = headers[index].textContent.toLowerCase().trim();

            obj[title] = value;
        }
        result.push(obj);
    }

    output.value = JSON.stringify(result, null, 1);
}