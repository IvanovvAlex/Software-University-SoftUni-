function validate() {
    const input = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/;

    input.addEventListener('change', () => {
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.removeAttribute('class');
        }
    })
}