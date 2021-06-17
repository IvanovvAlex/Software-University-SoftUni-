function solve() {
  let text = document.getElementById("text").value.split(' ');
  let convention = document.getElementById("naming-convention").value;
  let result=document.getElementById("result")
  
  if (convention!='Camel Case' && convention!='Pascal Case') 
  {
    result.innerText = "Error!";
    return
  }

  for (let i = 0; i < text.length; i++) 
  {
    text[i] = text[i][0].toUpperCase() + text[i].substring(1).toLowerCase();
  }

  if (convention ==='Camel Case')
  {
    text[0] = text[0].toLowerCase();
  } 

  result.innerText = text.join("");
}