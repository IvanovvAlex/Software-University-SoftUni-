function solve() {
   const output = document.querySelector('textarea');

   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const linePrice = Number(product.querySelector('.product-line-price').textContent);

         cart.push({ title, linePrice });

         output.value += `Added ${title} for ${linePrice.toFixed(2)} to the cart.\n`;
      }
   });

   console.log(cart);

   document.querySelector('.checkout').addEventListener('click', () => {
         const result = cart.reduce((acc, c) => {
            acc.items.push(c.title);
            acc.total += c.linePrice;
            return acc
         }, { items: [], total: 0 });

         output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`;
   });
}