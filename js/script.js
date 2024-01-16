document.addEventListener('DOMContentLoaded', function() {
    const sisiInput = document.getElementById('squareSide');
    const countButton = document.getElementById('countButton');
    const output = document.getElementById('output');

    countButton.addEventListener('click', function() {
        let s = parseFloat(sisiInput.value);
        let keliling = 4 * s;
        let luas = s * s;
        output.innerHTML = `Luas: ${luas}, Keliling: ${keliling}`;
    });
    ResetButton.addEventListener('click', function() {
        sisiInput.value = '';
        output.innerHTML = '';
    });
});