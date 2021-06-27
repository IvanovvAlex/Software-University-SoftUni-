function addItem() {
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');
    const div = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;

    div.appendChild(option);
    text.value = '';
    value.value = '';
}