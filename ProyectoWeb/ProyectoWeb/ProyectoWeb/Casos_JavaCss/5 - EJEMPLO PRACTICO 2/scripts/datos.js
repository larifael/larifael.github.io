var preguntaActual = 1
var correctas = 0
var respondidoCorrectamente = false
var radio = new Audio("./sources/audios/Fluffy.mp3")
var radioBoton = new Audio("./sources/audios/botones/radio.mp3")
var boton = new Audio("./sources/audios/botones/boton.mp3")
var moviendose = new Audio("./sources/audios/barcoMoviendose.mp3")
var mar = new Audio("./sources/audios/mar.mp3")
var correctoSonido = new Audio("./sources/audios/correcto.mp3")

mar.volume = 1
mar.loop = true
boton.volume = 1
radio.volume = 0.7
moviendose.volume = 0.3
radioBoton.volume = 0.4
radio.loop = true

var pause = false


var preguntas = {
    1:{
        pregunta:"¿Cual es el mamífero mas grande?",
        tipo:"opciones",
        opciones:["delfin","orca","ballena"],
        respuestaUsuario:"",
        respuestaCorrecta:"ballena"
    },
    2:{
        pregunta:"¿Que es la luna?",
        tipo:"opciones",
        opciones:["satelite","estrella","meteoro"],
        respuestaUsuario:"",
        respuestaCorrecta:"satelite"
    },
    3:{
        pregunta:"¿Qué da el combinar rojo y amarillo?",
        tipo:"opciones",
        opciones:["verde","azul","naranja"],
        respuestaUsuario:"",
        respuestaCorrecta:"naranja"
    }
}