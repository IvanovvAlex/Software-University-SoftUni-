function create(words) {
    const output = document.getElementById('content');

    words.forEach(w => output.appendChild(createArticle(w)));

    function createArticle(text) {
        const pElement = e('p', text);
        pElement.style.display = 'none';

        const divElement = e('div', text);

        divElement.addEventListener('click', () => {
            pElement.style.display = '';
        });

        return divElement;
    }

    function e(type, content) {
        const result = document.createElement(type);

        if (typeof content == 'string') {
            result.textContent = content;
        } else {
            result.appendChild(content);
        }

        return result;
    }
}