function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //
      let allRecords = document.querySelectorAll('.container tbody td');
      let toSearch = document.getElementById("searchField").value;

      for (const record of allRecords) 
      {
         if (record.innerText.indexOf(toSearch)>=0) 
         {
            record.parentElement.classList.add("select")
         }   
      }
   }
}