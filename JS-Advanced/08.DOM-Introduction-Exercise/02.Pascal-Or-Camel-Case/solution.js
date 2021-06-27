function solve() {
    let input = document.getElementById('text').value;
    let convertCase = document.getElementById('naming-convention').value;

    let result = applyNameConvention(input, convertCase);

    function applyNameConvention(text, conventionCase) {
        const conventionSwitch = {
          'Pascal Case': () => text
          .toLowerCase()
          .split(' ')
          .map(x => x[0].toUpperCase() + x.slice(1))
          .join(''),

          'Camel Case': () => text
          .toLowerCase()
          .split(' ')
          .map((x, i) => x = i != 0 ? x[0].toUpperCase() + x.slice(1) : x)
          .join(''),

          default: () => 'Error!'
        };

        return (conventionSwitch[conventionCase] || conventionSwitch.default)();
    }

    document.getElementById('result').textContent = result;
}