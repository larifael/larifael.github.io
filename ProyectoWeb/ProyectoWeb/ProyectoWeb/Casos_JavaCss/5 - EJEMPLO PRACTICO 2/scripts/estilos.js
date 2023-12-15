document.getElementById("pregunta").textContent = preguntas[String(preguntaActual)]["pregunta"]

document.getElementById("op01").textContent = preguntas[String(preguntaActual)]["opciones"][0]

document.getElementById("op02").textContent = preguntas[String(preguntaActual)]["opciones"][1]

document.getElementById("op03").textContent = preguntas[String(preguntaActual)]["opciones"][2]

function moverBarco(opcion) {
    mar.play()
    respuesta(opcion)
    playBoton()
    setTimeout(() => {
        moviendose.play()
        document.getElementById("barco").style.animation = "2s flotar linear infinite, 2s rotar linear infinite"
        
        siguietesOpciones()
        setTimeout(() => {
            document.getElementById("barco").style.animation = "2s flotar linear infinite"
        }, 6000);
    }, 500);
}

function escribirRespuesta() {
    miRespuesta = prompt(preguntaActual)
    setTimeout(() => {
        moverBarco()
    }, 150);
}

function siguietesOpciones() {
    const midiv = document.getElementById("grupoConos")
    midiv.style.transform = "translateY(30vh)"
}
function siguietesOpciones2() {
    const midiv = document.getElementById("grupoConos")
    midiv.style.transform = "translateY(0vh)"
}

function playRadio() {
    mar.play()
    setTimeout(() => {
        if (pause === false) {
            radio.play()
        } else {
            radio.pause()
        }
        pause = !pause
        radioBoton.play()
    }, 150);

    setTimeout(() => {
        document.getElementById("radio").blur()
    }, 300);
}
function playBoton() {
    setTimeout(() => {
        boton.play()
    }, 150);

    setTimeout(() => {
        document.getElementById("boton").blur()
    }, 5000);
}

function respuesta(opcion) {
    opcion = parseInt(opcion)
    var claves = Object.keys(preguntas)
    if (preguntas[String(preguntaActual)]["opciones"][parseInt(opcion)] === preguntas[String(preguntaActual)]["respuestaCorrecta"]) {
        correctoSonido.play()
        preguntas[String(preguntaActual)]["respuestaUsuaraio"] = "correcta"
        console.log(preguntas[String(preguntaActual)]["respuestaUsuaraio"])
        correctas += 1
        console.log(correctas)
        boton.volume = 0.4

    } else {
        boton.volume = 0.7
    }

    if (preguntaActual == Object.keys(preguntas).length) {
        console.log("terminado")
        document.getElementById("pregunta").textContent = "TRIVIA COMPLETADA, CORRECTAS: "+ String(correctas)
    } else {
        preguntaActual += 1
        setTimeout(() => {
            document.getElementById("pregunta").textContent = preguntas[String(preguntaActual)]["pregunta"]

            document.getElementById("op01").textContent = preguntas[String(preguntaActual)]["opciones"][0]

            document.getElementById("op02").textContent = preguntas[String(preguntaActual)]["opciones"][1]

            document.getElementById("op03").textContent = preguntas[String(preguntaActual)]["opciones"][2]
        }, 7000);
        setTimeout(() => {
            siguietesOpciones2() 
        }, 5000);
    }
}