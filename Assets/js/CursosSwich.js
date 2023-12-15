document.getElementById("cursoSelect").addEventListener("change", function() {
    const selectedValue = this.value;
    
    let cursoChecbox = document.querySelector('#cursoSelect');
    let contenedor = document.querySelector('#ContenedorDePagina');

    switch (selectedValue) {
        case 's2':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's3':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's4':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's5':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's6':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's7':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's8':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's9':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        case 's10':
            InicioSwich(contenedor,cursoChecbox, selectedValue);
            break;
        default:
            console.log("Opción no reconocida");
    }
});

function InicioSwich(contenedor,cursoChecbox, selectedValue){
    document.querySelector('#btnVolver').style.display = 'none';
    document.querySelector('.loading-spinner').style.display = 'block';
    cursoChecbox.setAttribute('disabled', 'true');
    contenedor.classList.add('animate__fadeOut');
    //-------------------------------------------------------------------
    setTimeout(function() {
        contenedor.classList.remove('animate__fadeOut');
        document.querySelector('.loading-spinner').style.display = 'none';
        document.querySelector('#btnVolver').style.display = 'block';
        //--------------------------------------------------------------
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'page/'+selectedValue+'.html', true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                contenedor.innerHTML = xhr.responseText;
            } else if (xhr.status == 404) {
                // Aquí manejas el caso cuando el archivo no se encuentra
                contenedor.innerHTML = `
                    <div class="row mt-5">
                        <div class="col-md-12 text-center text-danger">
                            <h1>Error 404</h1>
                            <p>Lo sentimos, la página que estás buscando no existe.</p>
                        </div>
                    </div>`;
            } else {
                contenedor.innerHTML = "Ha ocurrido un error al cargar la página.";
            }
        };
        xhr.send();
        //----------------------------------------------------------------
        contenedor.classList.add('animate__fadeIn');
        cursoChecbox.removeAttribute('disabled');
    }, 1000);
    //-------------------------------------------------------------------
    contenedor.classList.remove('animate__fadeIn');
}

