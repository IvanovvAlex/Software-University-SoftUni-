function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);

    const deleteButton = createElement('a', '[Delete]');
    deleteButton.href = '#';
    deleteButton.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    });
    
    liElement.appendChild(deleteButton);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement (type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}