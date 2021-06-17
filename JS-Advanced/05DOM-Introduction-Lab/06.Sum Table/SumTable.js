function sumTable() {
const tdRef = document.querySelectorAll('td');
let counter = 1;
let sum = 0;
for (const td of tdRef) {
    if (counter % 2 == 0) {
        
        sum += Number(td.textContent);
    }
    counter++;
}
document.querySelector('#sum').textContent = sum;
}