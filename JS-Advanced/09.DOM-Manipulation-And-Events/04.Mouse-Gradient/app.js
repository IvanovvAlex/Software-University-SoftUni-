function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result');

    function onMove(event) {
        //const offsetX = event.pageX - event.target.offsetLeft;
        const offsetX = event.offsetX;
        const percentage = Math.floor(offsetX / event.target.clientWidth * 100);

        output.textContent = `${percentage}%`;
    }
}