function extractText() {
    let listRef = document.getElementById('items');
    let textAreaRef = document.getElementById('result');
    let listOfElements = listRef.querySelectorAll('li');

    for (const element of listOfElements) {
        textAreaRef.textContent += `${element.textContent} \n`
    }
textAreaRef.textContent = textAreaRef.textContent.trim();
}