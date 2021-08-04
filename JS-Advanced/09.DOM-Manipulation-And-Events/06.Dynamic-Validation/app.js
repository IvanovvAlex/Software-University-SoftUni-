function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        const email = ev.target.value;
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (regex.test(email)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}