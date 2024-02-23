function setHeightDivDescription() {
    window.onload = adjustHeight;
    window.onresize = adjustHeight;

    function adjustHeight() {
        var secondDiv = document.getElementById('getheigth'); // Este es el segundo div
        var thirdDiv = document.getElementById('setheigth'); // Este es el tercer div (el verde)
        var heightOfSecondDiv = secondDiv.offsetHeight; // Obtén la altura del segundo div

        if (window.innerWidth <= 1080) {
            thirdDiv.style.maxHeight = 100 + '%'; // Ajusta la altura máxima del tercer div para que coincida
        } else {
            thirdDiv.style.maxHeight = heightOfSecondDiv + 'px'; // Ajusta la altura máxima del tercer div para que coincida
        }
    }
}

setHeightDivDescription();