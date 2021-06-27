function lockedProfile() {
    document.getElementById('main').addEventListener('click', (ev) => {
        if (ev.target.tagName == 'BUTTON') {
            const profile = ev.target.parentNode;
            const isLocked = profile.querySelector('input[type=radio]:checked').value == 'lock';

            if (isLocked) {
                return;
            }

            const div = profile.querySelector('div');
            const isVisible = div.style.display == 'block';

            div.style.display = isVisible ? 'none' : 'block';

            ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
        }
    })
}