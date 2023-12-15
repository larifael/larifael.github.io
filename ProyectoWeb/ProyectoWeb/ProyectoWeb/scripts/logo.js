var $logo = $('.lineart').drawsvg()
var reversa = false, cargado = false

$logo.drawsvg({
    duration: 2000,
    stagger: 0,
    reverse: true,
    callback: function () {
        if (!cargado) {
            $logo.drawsvg('animate')
        } else {
            $('.fondologo').animate({
                opacity: 0
            }, 500)
            $('.tapadera').fadeOut(200)
            $('.logo').animate({
                opacity: 0
            }
                , {
                    duration: 500, complete: function () {
                        $('.logo').remove()
                        $('.fondologo').remove()
                        $('.tapadera').remove()
                        $('#navegador').animate({
                            opacity:0,
                            height:0
                        }, 1000,function () {
                            $('#navegador').css({display:"none"})
                        })
                        $('.cajaLogo').animate({
                            top:"10%",
                            width: "1vh",
                            height: "50%"
                        }, 1000)
                        $('.lineart').animate({
                            width: 0.1 + "vh",
                            height: 0.1 + "vh",
                            opacity: 1
                        }, 1200, function () {
                            $('.lineart').addClass('logoFijo')
                            $('body').css({ overflow: "auto", height: "100%" })
                        })

                    }
                })


        }
    }
})
function mostrarCarga(bool) {
    if (bool) {
        $logo.drawsvg('animate')
        window.onload = function () {
            setTimeout(() => {
                cargado = true
                verifcador = true
                console.log("carga lista")
            }, 500);
        }
    } else {
        $logo.drawsvg('progress', 1)
        $('.logo').remove()
        $('.fondologo').remove()
        $('.tapadera').remove()
        $('.cajaLogo').css({
            margin: "2%",
            marginTop: "1%",
            width: "10vh",
            height: "90%"
        })
        $('.lineart').css({
            margiRight: 0,
            width: 10 + "vh",
            height: 10 + "vh",
            opacity: 1
        })
        $('body').css({ overflow: "auto", height: "100%" })
        $('.lineart').addClass('logoFijo')
        verifcador = true
    }
}



