function search() {
    const towns = document.querySelectorAll('#towns li');
    const input = document.querySelector('input').value;
    const result = document.getElementById('result');

    let sum = 0;

    for (const town of towns) {
       if (town.textContent.toLowerCase().includes(input.toLowerCase())) {
          town.style.fontWeight = 'bold';
          town.style.textDecoration = 'underline';
          sum++;
       } else {
          town.style.fontWeight = '';
          town.style.textDecoration = '';
       }
    }

    result.textContent = `${sum} matches found`;
}
