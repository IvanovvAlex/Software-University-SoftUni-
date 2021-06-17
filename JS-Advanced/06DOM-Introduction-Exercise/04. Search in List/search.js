function search() {
   let searchText = document.getElementById('searchText').value;
   let liCollection = document.querySelectorAll('#towns li');
   let counter = 0;
   for (const town of liCollection) {
      if (town.textContent.includes(searchText)) {
         counter++;
         town.style.fontWeight='bold'
         town.style.textDecoration = "underline"
      }
   }
   document.getElementById('result').textContent=`${counter} matches found`
}
