var paginaCargada = false
var octavasNombradas = []
var octavas = {
    1: {
        1: "1DO",
        2: "1DOs",
        3: "1RE",
        4: "1REs",
        5: "1MI",
        6: "1FA",
        7: "1FAs",
        8: "1SOL",
        9: "1SOLs",
        10: "1LA",
        11: "1LAs",
        12: "1SI"
    },
    2: {
        1: "2DO",
        2: "2DOs",
        3: "2RE",
        4: "2REs",
        5: "2MI",
        6: "2FA",
        7: "2FAs",
        8: "2SOL",
        9: "2SOLs",
        10: "2LA",
        11: "2LAs",
        12: "2SI"
    },
    3: {
        1: "3DO",
        2: "3DOs",
        3: "3RE",
        4: "3REs",
        5: "3MI",
        6: "3FA",
        7: "3FAs",
        8: "3SOL",
        9: "3SOLs",
        10: "3LA",
        11: "3LAs",
        12: "3SI"
    }
}
function asignarSonidosYEventos(direccionInstrumento) {
    let numeroSonidoActual = 0


    let direccionSonidoActual = direccionInstrumento + direccionSonidos[numeroSonidoActual]



}



var teclasOctava1 = ["z", "s", "x", "d", "c", "v", "g", "b", "h", "n", "j", "m"]
var teclasOctava2a = [",", "l", ".", "ñ", "-"]
var teclasOctava2b = ["q", "2", "w", "3", "e", "r", "5", "t", "6", "y", "7", "u"]
var teclasOctava3 = ["i", "9", "o", "0", "p", "'", "¡", "+"]

var sonidosOctava1 = {}
var sonidosOctava2b = {}
var sonidosOctava2a = {}
var sonidosOctava3 = {}

function aPiano() {
    cambiarInstrumento(direccionInstrumentos.piano.kontak, 3)
}

function aBajo() {
    cambiarInstrumento(direccionInstrumentos.guitarra.bajo, 2)
}

function cambiarInstrumento(instrumento, octava) {
    octavaInicial = octava
    asignarTeclas(1, sonidosOctava1, teclasOctava1, (octava), instrumento)
    asignarTeclas(2, sonidosOctava2a, teclasOctava2a, (octava + 1), instrumento)
    asignarTeclas(2, sonidosOctava2b, teclasOctava2b, (octava + 1), instrumento)
    asignarTeclas(3, sonidosOctava3, teclasOctava3, (octava + 2), instrumento)

}

asignarTeclas(1, sonidosOctava1, teclasOctava1, 2, direccionInstrumentos.piano.kontak)
asignarTeclas(2, sonidosOctava2a, teclasOctava2a, 3, direccionInstrumentos.piano.kontak)
asignarTeclas(2, sonidosOctava2b, teclasOctava2b, 3, direccionInstrumentos.piano.kontak)
asignarTeclas(3, sonidosOctava3, teclasOctava3, 4, direccionInstrumentos.piano.kontak)

function asignarTeclas(grupoIds, ArregloSonidos, ArregloTeclas, octava, instrumento) {
    var numeroDeTecla = 0

    var octavatres = 0
    ArregloTeclas.forEach(tecla => {
        //tecla actual
        var octavaNombrada = false
        var ac = numeroDeTecla + 1

        //nombre del conjunto de ids de cada tecla
        var ids = String(octavas[grupoIds][ac])
        //nombre de la tecla actual
        var n = String(ArregloTeclas[numeroDeTecla])

        var contenedorPadre = document.getElementById(ids)
        var nota = contenedorPadre.getElementsByClassName('nota')[0]
        var stringNota = nota.innerHTML || nota.textContent
        stringNota = stringNota.split('');
        stringNota.forEach(element => {
            if (element == n) {
                octavaNombrada = true
            }
        });





        if (!octavaNombrada) {
            nota.innerHTML += n
        }

        nota = contenedorPadre.getElementsByClassName('notaOctava')[0]
            stringNota = nota.innerHTML || nota.textContent
            stringNota = stringNota.split('');
            if (isNaN(stringNota[0])) {
                nota.innerHTML = octava + nota.innerHTML
            }


        ArregloSonidos[String(ArregloTeclas[numeroDeTecla])] = {
            teclaSoltada: true,
            direccion: String(instrumento + direccionSonidos[octava][numeroDeTecla])
        }

        var sonido = new Audio(ArregloSonidos[String(ArregloTeclas[numeroDeTecla])].direccion)

        
        //añadir un escucha al presionar
        document.addEventListener("keydown", function (event) {
            if (event.key.toLowerCase() === tecla) {
                ejercicios[ejerciciosResueltos.tipoActual].modificarNota(String(nota.textContent.trim()), "keydown",octava)
                var top = "2%"
                if (ids.charAt(ids.length - 1) == "s") {
                    top = "-1%"
                }
                document.getElementById(ids).style.filter = "grayscale(0%)"
                document.getElementById(ids).style.top = top
            }
        })
        //añadir un escucha al soltar una tecla
        document.addEventListener("keyup", function (event) {
            if (event.key.toLowerCase() === tecla) {

                ejercicios[ejerciciosResueltos.tipoActual].modificarNota(String(nota.textContent.trim()), "keyup",octava)
                var top = "0%"
                if (ids.charAt(ids.length - 1) == "s") {
                    top = "-3%"
                }
                ArregloSonidos[n].teclaSoltada = true
                document.getElementById(ids).style.filter = "grayscale(80%)"
                document.getElementById(ids).style.top = top
            }
        })

        //añadir un escucha al matener presionado una tecla
        document.addEventListener("keypress", function (event) {
            if (event.key.toLowerCase() === tecla) {
                if (ArregloSonidos[n].teclaSoltada == true) {
                    ArregloSonidos[n].teclaSoltada = false
                    sonido = new Audio(ArregloSonidos[n].direccion)
                    sonido.play()

                }
            }
        })
        numeroDeTecla++
    });
}
/*
//variable para saber si la tecla esta suelta
var teclaSoltada = true
var sonido = new Audio("./sonidos/piano/clasica/4/C4.wav")
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "z") {

    }
})
document.addEventListener("keyup", function (event) {
    if (event.key.toLowerCase() === "z") {
        teclaSoltada = true
    }
    document.body.style.backgroundColor = "white"
})
function releaseSonido() {
}

document.addEventListener("keypress", function (event) {
    if (event.key.toLowerCase() === "z") {
        if (teclaSoltada) {
            teclaSoltada = false

            sonido = new Audio("./sonidos/piano/clasica/4/C4.wav")
            sonido.play()

        }
    }
})*/