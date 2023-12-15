//etiquetas html del piano
var pianoCreado = false
//direccion de las carpetas de los instrumentos
var pausado = true
var escondido = false
function verTeclas() {
    console.log(escondido)
    if (!escondido) {
        $('.c').css({ opacity: 1, scale: 1 })
        $('.a').css({ opacity: 0, scale: 0 })
        $('.nota').css({ opacity: 0 })
    } else {
        $('.c').css({ opacity: 0, scale: 0 })
        $('.a').css({ opacity: 1, scale: 1 })
        $('.nota').css({ opacity: 1 })
    }
    escondido = !escondido
}
function pausar() {
    if (ejerciciosResueltos.terminado && $('.repetir').css("opacity") == 0) {
        $('.repetir').animate({ opacity: 1, scale: 1 }, {
            duration: 20,
            complete: function () {
                $('#estado').css({
                    "background-color": "rgba(255, 248, 157, 0.493)",
                    "transition-duration": duracion * 100
                })
                $('.pausa').animate({ opacity: 0, scale: 0 }, 20)
                $('.play').animate({ opacity: 0, scale: 0 }, 20)
                $('#aviso div').text("ejercicio Terminado")
            }
        })
        $('.repetir').css({
            "transition-duration": 1000
        })
        ejerciciosResueltos.ejercicioActual == null
        return
    } if ($('.repetir').css("opacity") == 1 && ejerciciosResueltos.terminado && ejerciciosResueltos.progresoCancion != 0) {
        ejerciciosResueltos.repetir()
        return
    }
    if (!pausado) {
        $('.play').animate({ opacity: 0, scale: 0 }, {
            duration: 20,
            complete: function () {
                $('#estado').css({
                    "background-color": "rgba(255, 172, 193, 0.425)",
                    "transition-duration": duracion * 100
                })
                $('.pausa').animate({ opacity: 1, scale: 1 }, 20)
                $('.repetir').animate({ opacity: 0, scale: 0 }, 20)
                $('#aviso div').text("en pausa")
            }
        })

    } else {
        $('.pausa').animate({ opacity: 0, scale: 0 }, {
            duration: 20,
            complete: function () {
                $('#estado').css({
                    "background-color": "rgba(205, 255, 172, 0.425)",
                    "transition-duration": duracion * 100
                })
                $('.play').animate({ opacity: 1, scale: 1 }, 20)
                $('.repetir').animate({ opacity: 0, scale: 0 }, 20)
                $('#aviso div').text("en juego")
            }
        })
    }
    pausado = !pausado
    ejerciciosResueltos.pausa = pausado
}
var direccionInstrumentos = {
    piano: {
        clasica: "./sonidos/piano/clasica",
        kontak: "./sonidos/piano/kontak"
    },
    guitarra: {
        bajo: "./sonidos/guitarra/bajo"
    }
}
//direccion de los sonidos de cada carpeta
var direccionSonidos = [
    ['/1/C1.wav',
        '/1/Cs1.wav',
        '/1/D1.wav',
        '/1/Ds1.wav',
        '/1/E1.wav',
        '/1/F1.wav',
        '/1/Fs1.wav',
        '/1/G1.wav',
        '/1/Gs1.wav',
        '/1/A1.wav',
        '/1/As1.wav',
        '/1/B1.wav'],
    ['/2/C2.wav',
        '/2/Cs2.wav',
        '/2/D2.wav',
        '/2/Ds2.wav',
        '/2/E2.wav',
        '/2/F2.wav',
        '/2/Fs2.wav',
        '/2/G2.wav',
        '/2/Gs2.wav',
        '/2/A2.wav',
        '/2/As2.wav',
        '/2/B2.wav'],
    ['/3/C3.wav',
        '/3/Cs3.wav',
        '/3/D3.wav',
        '/3/Ds3.wav',
        '/3/E3.wav',
        '/3/F3.wav',
        '/3/Fs3.wav',
        '/3/G3.wav',
        '/3/Gs3.wav',
        '/3/A3.wav',
        '/3/As3.wav',
        '/3/B3.wav'],
    ["/4/C4.wav",
        "/4/Cs4.wav",
        "/4/D4.wav",
        "/4/Ds4.wav",
        "/4/E4.wav",
        "/4/F4.wav",
        "/4/Fs4.wav",
        "/4/G4.wav",
        "/4/Gs4.wav",
        "/4/A4.wav",
        "/4/As4.wav",
        "/4/B4.wav"],
    ["/5/C5.wav",
        "/5/Cs5.wav",
        "/5/D5.wav",
        "/5/Ds5.wav",
        "/5/E5.wav",
        "/5/F5.wav",
        "/5/Fs5.wav",
        "/5/G5.wav",
        "/5/Gs5.wav",
        "/5/A5.wav",
        "/5/As5.wav",
        "/5/B5.wav"],
    ["/6/C6.wav",
        "/6/Cs6.wav",
        "/6/D6.wav",
        "/6/Ds6.wav",
        "/6/E6.wav",
        "/6/F6.wav",
        "/6/Fs6.wav",
        "/6/G6.wav",
        "/6/Gs6.wav",
        "/6/A6.wav",
        "/6/As6.wav",
        "/6/B6.wav"],
    ["/7/C7.wav",
        "/7/Cs7.wav",
        "/7/D7.wav",
        "/7/Ds7.wav",
        "/7/E7.wav",
        "/7/F7.wav",
        "/7/Fs7.wav",
        "/7/G7.wav",
        "/7/Gs7.wav",
        "/7/A7.wav",
        "/7/As7.wav",
        "/7/B7.wav"]
]

var notacion = {
    solfeo: {
        "DO": {
            natural: {
                nombre: "DO",
                direccion: ""
            },
            alterada: {
                nombre: "DO",
                direccion: ""
            }
        },
        "RE": {
            natural: {
                nombre: "RE",
                direccion: ""
            },
            alterada: {
                nombre: "RE#",
                direccion: ""
            }
        },
        "MI": {
            natural: {
                nombre: "MI",
                direccion: ""
            }
        },
        "FA": {
            natural: {
                nombre: "FA",
                direccion: ""
            },
            alterada: {
                nombre: "FA#",
                direccion: ""
            }
        },
        "SOL": {
            natural: {
                nombre: "SOL",
                direccion: ""
            },
            alterada: {
                nombre: "SOL#",
                direccion: ""
            }
        },
        "LA": {
            natural: {
                nombre: "LA",
                direccion: ""
            },
            alterada: {
                nombre: "LA#",
                direccion: ""
            }
        },
        "SI": {
            natural: {
                nombre: "SI",
                direccion: ""
            }
        }
    }
}
const clavesObjetosAnidados = Object.keys(notacion.solfeo);
var claveAleatoria
var ejercicios = {
    estado: false,
    tipoNota: {
        navidad: {
            notas: [
                "2SI", "2SI", "2SI",
                "2SI", "2SI", "2SI",
                "2SI", "3RE", "2SOL",
                "2LA", "2SI",
                "3DO", "3DO", "3DO", "3DO",
                "3DO", "2SI", "2SI", "2SI",
                "3RE", "3RE", "3DO", "2LA",
                "2SOL",
                "2RE","2RE","2RE","2SI","2LA","2SOL",
                "2RE",
                "2RE","2RE","2RE","2SI","2LA","2SOL",
                "2MI",
                "2MI","2MI","2MI","3DO","2SI","2LA",
                "3RE","3RE",
                "3MI","3MI","3DO","2LA","2SOL"

            ],
            duracion: [
                1, 1, 2,
                1, 1, 2,
                1, 1, 2,
                0.5, 3.5,
                1, 1, 1, 1,
                1, 1, 1, 1,
                1, 1, 1, 1,
                4,
                0.3,0.3,0.3,1,1,1,
                4,
                0.3,0.3,0.3,1,1,1,
                4,
                0.3,0.3,0.3,1,1,1,
                2,2,
                1, 1, 1, 1,
                4
            ]
        },
        obtenerEjercicio: function () {
            if (ejerciciosResueltos.cancion == "random" || ejerciciosResueltos.cancion == null) {
                claveAleatoria = clavesObjetosAnidados[Math.floor(Math.random() * clavesObjetosAnidados.length)]
                var claveTipoNota = Object.keys(notacion.solfeo[claveAleatoria])
                claveTipoNota = claveTipoNota[Math.floor(Math.random() * claveTipoNota.length)]
                ejerciciosResueltos.duracionNotaActual = 1
                return (Math.floor(Math.random() * 2) + 2) + "" + notacion.solfeo[claveAleatoria][claveTipoNota].nombre
            } else {
                //si esta vacio la cancion
                if (ejerciciosResueltos.ejercicioActual == null) {
                    ejerciciosResueltos.progresoCancion = 1
                    return ejerciciosResueltos.cancion[0]
                    //si no esta vacio la cancion
                } else if (ejerciciosResueltos.progresoCancion == ejerciciosResueltos.tamanioCancion) {
                    ejerciciosResueltos.duracionNotaActual = ejerciciosResueltos.duracionNotas[ejerciciosResueltos.progresoCancion - 1]
                    return "COMPETADO"

                } else if (ejerciciosResueltos.progresoCancion == ejerciciosResueltos.tamanioCancion + 1) {
                    ejerciciosResueltos.duracionNotaActual = ejerciciosResueltos.duracionNotas[ejerciciosResueltos.progresoCancion - 1]
                    $('#ejSiguiente').css({ "font-size": "6vw" })
                    $('#ejActual').css({ "font-size": "6vw" })
                    ejerciciosResueltos.terminado = true
                    return ":D"
                } else {
                    if (ejerciciosResueltos.progresoCancion == ejerciciosResueltos.tamanioCancion) {

                    } else {
                        ejerciciosResueltos.duracionNotaActual = ejerciciosResueltos.duracionNotas[ejerciciosResueltos.progresoCancion - 1]
                    }
                    return ejerciciosResueltos.cancion[ejerciciosResueltos.progresoCancion]
                }
            }

        },
        modificarNota: function (nombreTecla, accion, octava) {
            var nombreNota = String(nombreTecla)
            if (nombreNota.charAt(nombreNota.length - 1) == "s") {
                nombreNota = nombreNota.substring(0, nombreNota.length - 1) + "#"
            }
            if (accion == "keydown") {
                ejerciciosResueltos.notasTocando.push(nombreNota)
                this.verificarRespuesta(nombreTecla)
            } else if (accion == "keyup") {
                ejerciciosResueltos.notasTocando.splice(ejerciciosResueltos.notasTocando.indexOf(nombreNota))
            }

        },
        verificarRespuesta: function (nombreNota) {
            if (ejerciciosResueltos.verificando) {
                return
            }
            var duracion = ejerciciosResueltos.duracionNotaActual * 200
            console.log(nombreNota + "=" + ejerciciosResueltos.ejercicioActual)
            if (String(nombreNota) == String(ejerciciosResueltos.ejercicioActual) && !ejerciciosResueltos.pausa) {
                ejerciciosResueltos.progresoCancion++
                ejerciciosResueltos.verificando = true
                setTimeout(() => {
                    ejerciciosResueltos.verificando = false
                }, duracion * 1.00);
                ejerciciosResueltos.ejercicioActual = ejerciciosResueltos.ejercicioSiguiente
                ejerciciosResueltos.ejercicioSiguiente = ejercicios[ejerciciosResueltos.tipoActual].obtenerEjercicio()
                if (ejerciciosResueltos.par) {
                    $('#ejActual').css({
                        "transition-duration": duracion / 1000 + "s",
                        "-webkit-filter": "blur(0px)",
                        "filter": "blur(0px)"
                    })
                    $('#ejSiguiente').css({
                        "transition-duration": duracion / 1000 + "s",
                        "-webkit-filter": "blur(2px)",
                        "filter": "blur(2px)"
                    })
                    $('#ejActual').animate({
                        top: "45%",
                        opacity: 1,
                        scale: 1
                    }, duracion)
                    $('#ejSiguiente').animate({
                        opacity: 0,
                        top: "80%",
                        scale: 0,
                    }, (duracion * 1 / 3), function () {
                        $('#ejSiguiente').css({
                            "transition-duration": "0s",
                            "color": "white",
                            top: "-20%"
                        })
                        if (ejerciciosResueltos.terminado) {
                            $('#duracion').text(null)
                            pausar()
                        } else {
                            $('#duracion').text(ejerciciosResueltos.duracionNotaActual)
                        }

                        $('#ejActual').text(ejerciciosResueltos.ejercicioActual)
                        $('#ejSiguiente').text(ejerciciosResueltos.ejercicioSiguiente)
                        $('#ejSiguiente').animate({
                            top: "0%",
                            opacity: 1,
                            scale: 0.5
                        }, (duracion * 2 / 3),function () {
                            $('#ejActual').css({color:"rgb(250, 246, 193)"}) 
                        })
                    })
                } else {
                    $('#ejSiguiente').css({
                        "transition-duration": duracion / 1000 + "s",
                        "-webkit-filter": "blur(0px)",
                        "filter": "blur(0px)"
                    })
                    $('#ejActual').css({
                        "transition-duration": duracion / 1000 + "s",
                        "-webkit-filter": "blur(2px)",
                        "filter": "blur(2px)"
                    })
                    $('#ejSiguiente').animate({
                        top: "45%",
                        opacity: 1,
                        scale: 1
                    }, duracion)
                    $('#ejActual').animate({
                        opacity: 0,
                        top: "80%",
                        scale: 0,
                    }, (duracion * 1 / 3), function () {
                        $('#ejActual').css({
                            "color": "white",
                            "transition-duration": "0s",
                            top: "-20%"
                        })
                        if (ejerciciosResueltos.terminado) {
                            $('#duracion').text(null)
                            pausar()
                        } else {
                            $('#duracion').text(ejerciciosResueltos.duracionNotaActual)
                        }
                        $('#ejSiguiente').text(ejerciciosResueltos.ejercicioActual)
                        $('#ejActual').text(ejerciciosResueltos.ejercicioSiguiente)
                        $('#ejActual').animate({
                            top: "0%",
                            opacity: 1,
                            scale: 0.5
                        }, (duracion * 2 / 3),function () {
                            $('#ejSiguiente').css({color:"rgb(250, 246, 193)"}) 
                        })
                    })
                }


                ejerciciosResueltos.par = !ejerciciosResueltos.par
            } else {

            }
        }
    },
    tipoIntervalo: {

    },
    tipoAcorde: {

    }
}
function añadirNotaTocada(teclaTocada) {

}

//saber que notas estan sonanado actualmente
var ejerciciosResueltos = {
    repetir: function () {
        nuevosEjercicios(ejerciciosResueltos.tipoActual, ejerciciosResueltos.nombreEjercicio)
        ejercicios[this.tipoActual].verificarRespuesta(ejerciciosResueltos.ejercicioActual)
    },
    primeraOctava: null,
    terminado: false,
    pausa: false,
    verificando: false,
    par: false,
    tipoActual: "",
    progresoCancion: 0,
    tamanioCancion: 0,
    cancion: null,
    duracionNotas: null,
    duracionNotaActual: null,
    ejercicioActual: null,
    ejercicioSiguiente: null,
    notasTocando: [],
    ejerciciosPasados: null,
    resultado: {
        totalResueltos: 0,
        nota: 0
    }
}

//octava actual
var octavaInicial = 3

//obtiene un ejercicio de la clase
function nuevosEjercicios(tipoDeEjercicio, ejercicio, nuevo) {
    if (ejercicio == "random" || ejercicio == null) {
        ejerciciosResueltos.cancion = "random"
        ejerciciosResueltos.nombreEjercicio = null
    } else {
        ejerciciosResueltos.terminado = false
        ejerciciosResueltos.cancion = ejercicios[tipoDeEjercicio][ejercicio].notas
        ejerciciosResueltos.duracionNotas = ejercicios[tipoDeEjercicio][ejercicio].duracion
        ejerciciosResueltos.duracionNotaActual = ejercicios[tipoDeEjercicio][ejercicio].duracion[0]
        ejerciciosResueltos.tamanioCancion = ejerciciosResueltos.cancion.length
    }
    ejerciciosResueltos.progresoCancion = 0
    ejerciciosResueltos.nombreEjercicio = ejercicio
    ejerciciosResueltos.tipoActual = tipoDeEjercicio
    ejerciciosResueltos.ejercicioActual = ejercicios[ejerciciosResueltos.tipoActual].obtenerEjercicio()
    ejerciciosResueltos.ejercicioSiguiente = ejercicios[ejerciciosResueltos.tipoActual].obtenerEjercicio()
    $('#ejSiguiente').css({ "font-size": "1em" })
    $('#ejActual').css({ "font-size": "1em" })
    $('#ejSiguiente').text(ejerciciosResueltos.ejercicioSiguiente)
    $('#ejActual').text(ejerciciosResueltos.ejercicioActual)
    $('#duracion').text(ejerciciosResueltos.duracionNotaActual)
    pausado = true
    pausar()
    if (nuevo == "nuevo") {
        ejerciciosResueltos.repetir()
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        pausar()
    }
})


nuevosEjercicios("tipoNota", "navidad")