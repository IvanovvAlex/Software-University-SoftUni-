function addItem() {
    const inputTextBox = document.getElementById('newItemText');
    const liElement = document.createElement('li');
    const ulElement = document.getElementById('items');

    liElement.textContent = inputTextBox.value;
    ulElement.appendChild(liElement);
    inputTextBox.value = '';
}