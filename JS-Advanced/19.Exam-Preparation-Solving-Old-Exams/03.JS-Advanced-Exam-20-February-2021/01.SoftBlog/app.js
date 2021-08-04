function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');

   const createButton = document.getElementsByClassName('btn create')[0];
   
   createButton.addEventListener('click', (ev) => {
      ev.preventDefault();

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = titleField.value;
      titleField.value = '';

      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:';
      
      let categoryContent = document.createElement('strong');
      categoryContent.textContent = categoryField.value;
      categoryField.value = '';
      categoryParagraph.appendChild(categoryContent);

      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:';

      let creatorContent = document.createElement('strong');
      creatorContent.textContent = authorField.value;
      authorField.value = '';
      creatorParagraph.appendChild(creatorContent);

      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = contentField.value;
      contentField.value = '';

      let buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');

      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');

      let archiveButton = document.createElement('button');
      archiveButton.textContent = 'Archive';
      archiveButton.classList.add('btn');
      archiveButton.classList.add('archive');

      deleteButton.addEventListener('click', (ev) => {
         ev.target.parentNode.parentNode.remove();
      })

      archiveButton.addEventListener('click', (ev) => {
         //adding + removing

         let nameForArchive = ev.target.parentNode.parentNode.children[0].textContent;
         ev.target.parentNode.parentNode.remove();

         let archiveOl = document.getElementsByClassName('archive-section')[0].children[1];

         let li = document.createElement('li');
         li.textContent = nameForArchive;
         archiveOl.appendChild(li);

         //sorting

         Array
         .from(archiveOl.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(a => archiveOl.appendChild(a));
      })

      buttonsDiv.appendChild(deleteButton);
      buttonsDiv.appendChild(archiveButton);

      article.appendChild(h1);
      article.appendChild(categoryParagraph);
      article.appendChild(creatorParagraph);
      article.appendChild(contentParagraph);
      article.appendChild(buttonsDiv);

      const section = document.querySelector('main>section');
      section.appendChild(article);
   });
}