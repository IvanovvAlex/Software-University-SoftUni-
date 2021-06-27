function toggle() {
    const button = document.querySelector('.button');
    const div = document.getElementById('extra');

    let isHidden = button.textContent == 'More';

    div.style.display = isHidden ? 'block' : 'none';                 
    button.textContent = isHidden ? 'Less' : 'More';
}