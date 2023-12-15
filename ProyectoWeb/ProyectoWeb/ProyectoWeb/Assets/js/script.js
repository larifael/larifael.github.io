// Mostrar spinner y ocultar contenedor de página
document.querySelector('#loading_spinner').style.display = 'block';
document.querySelector('#cursoSelect').setAttribute('disabled', 'true');
document.querySelector('#ContenedorDePagina').style.opacity = "0";

setTimeout(function(){
    // Iniciar transición de opacidad
    document.querySelector('#ContenedorDePagina').style.opacity = "1";

    // Agregar detector de eventos para ocultar el spinner al finalizar la transición
    document.querySelector('#ContenedorDePagina').addEventListener('transitionend', function() {
        document.querySelector('#loading_spinner').style.display = 'none';
        document.querySelector('#cursoSelect').removeAttribute('disabled');
    }, { once: true }); // La opción { once: true } garantiza que el evento se ejecute solo una vez
}, 2000);



    
function actualizarAcumulador() {
    let numero1 = document.getElementById('#numero1');
    let numero2 = document.getElementById('#numero2');
    let display = document.getElementById('#NumeroAcomulador');

    let n1 = parseFloat(numero1.value) || 0;
    let n2 = parseFloat(numero2.value) || 0;
    let suma = n1 + n2;
    display.textContent  = suma;
}


