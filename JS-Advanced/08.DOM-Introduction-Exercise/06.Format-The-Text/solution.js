function solve() {
  const sentences = document.getElementById('input')
  .value
  .split('.')
  .filter(x => x.length >= 1);

  const output = document.getElementById('output');

  createParagraphs(sentences);

  function createParagraphs(text) {
      let paragraph = [];

      while (text.length > 0) {
          paragraph.push(text.splice(0, 3).join('.') + '.');
      }

      paragraph.forEach((p) => (output.innerHTML += `<p>${p}</p>\n`));
  }
}