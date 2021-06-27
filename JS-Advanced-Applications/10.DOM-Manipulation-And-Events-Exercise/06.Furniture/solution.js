function solve() {
  const [generateButton, buyButton] = document.querySelectorAll('button');
  const [input, output] = document.querySelectorAll('textarea');
  const body = document.querySelector('tbody');

  generateButton.addEventListener('click', onClickGenerate);
  buyButton.addEventListener('click', onClickBuy);

  function onClickGenerate() {
    const array = JSON.parse(input.value);

    for (element of array) {
      const row = document.createElement('tr');

      const cellImage = document.createElement('td');
      const image = document.createElement('img');
      image.setAttribute('src', element.img);
      cellImage.appendChild(image);

      const cellName = document.createElement('td');
      const paragName = document.createElement('p');
      paragName.textContent = element.name;
      cellName.appendChild(paragName);

      const cellPrice = document.createElement('td');
      const paragPrice = document.createElement('p');
      paragPrice.textContent = element.price;
      cellPrice.appendChild(paragPrice);

      const cellDecor = document.createElement('td');
      const paragDecor = document.createElement('p');
      paragDecor.textContent = element.decFactor;
      cellDecor.appendChild(paragDecor);

      const cellCheck = document.createElement('td');
      const impt = document.createElement('input');
      impt.setAttribute('type', 'checkbox');
      cellCheck.appendChild(impt);

      row.appendChild(cellImage);
      row.appendChild(cellName);
      row.appendChild(cellPrice);
      row.appendChild(cellDecor);
      row.appendChild(cellCheck);

      body.appendChild(row);
    }
  }

  function onClickBuy() {
    const furniture = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
      .map(input => input.parentNode.parentNode);

    const result = {
      bought: [],
      totalPrice: 0,
      decFactorSum: 0
    }

    for (let row of furniture) {
      const cells = row.children;

      const name = cells[1].children[0].textContent;
      result.bought.push(name);

      const price = Number(cells[2].children[0].textContent);
      result.totalPrice += price;

      const factor = Number(cells[3].children[0].textContent);
      result.decFactorSum += factor;
    }

    output.value = `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.decFactorSum / furniture.length}`;
  }
}