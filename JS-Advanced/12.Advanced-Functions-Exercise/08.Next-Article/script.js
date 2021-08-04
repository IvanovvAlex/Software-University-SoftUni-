function getArticleGenerator(articles) {
    let articleArray = articles;
    const divElement = document.getElementById('content');

    return function() {
        while (articleArray.length > 0) {
            let article = document.createElement('article');
            article.textContent = articleArray.shift();
            divElement.appendChild(article);
        }
    }
}
