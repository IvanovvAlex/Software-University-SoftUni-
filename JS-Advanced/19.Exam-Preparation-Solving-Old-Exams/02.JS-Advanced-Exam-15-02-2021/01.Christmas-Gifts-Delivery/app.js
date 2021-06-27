function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('section ul');
    const input = document.querySelector('input');

    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        const name = input.value;
        input.value = '';

        const element = createElement('li', name, 'gift');
        const sendButton = createElement('button', 'Send', 'sendButton');
        const discardButton = createElement('button', 'Discard', 'discardButton');

        element.appendChild(sendButton);
        element.appendChild(discardButton);

        sendButton.addEventListener('click', () => sendGift(name, element));
        discardButton.addEventListener('click', () => discardGift(name, element));

        gifts.appendChild(element);

        sortGifts();
    }

    function sendGift(name, gift) {
        gift.remove();
        
        const element = createElement('li', name, 'gift');

        sent.appendChild(element);
    }

    function discardGift(name, gift) {
        gift.remove();
        
        const element = createElement('li', name, 'gift');

        discarded.appendChild(element);
    }

    function sortGifts() {
        Array.from(gifts.children)
        .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
        .forEach(g => gifts.appendChild(g));
    }

    function createElement(type, content, className) {
        const result = document.createElement(type);
        result.textContent = content;
        
        if(className) {
            result.className = className;
        }

        return result;
    }
}