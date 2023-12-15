export class Estudiante {
  
  constructor(nombre, apellidos, carrera, ciclo) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.carrera = carrera;
    this.ciclo = ciclo;
  }

  toCardHTML(index) {
    return `
      <div class="col-md-4" id="estudiante-card-${index}">
        <div class="card mb-4 shadow-sm animate__animated animate__zoomIn">
          <div class="card-body">
            <p class="card-text">Nombre: ${this.nombre}</p>
            <p class="card-text">Apellidos: ${this.apellidos}</p>
            <p class="card-text">Carrera: ${this.carrera}</p>
            <p class="card-text">Ciclo: ${this.ciclo}</p>
            <button data-index="${index}" class="btn btn-danger delete-estudiante">Eliminar</button>
          </div>
        </div>
      </div>
    `;
  }

  guardar() {
    const estudiantes = obtenerEstudiantes();
    estudiantes.push(this);
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    mostrarAlerta('Se ha registrado un nuevo estudiante.', 'success');
  } 
}

function obtenerEstudiantes() {
  return JSON.parse(localStorage.getItem('estudiantes')) || [];
}

function mostrarAlerta(mensaje, tipo) {
  const alertContainer = document.getElementById('alert-container');
  const alerta = document.createElement('div');
  alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
  alerta.role = 'alert';
  alerta.innerHTML = mensaje;
  alertContainer.appendChild(alerta);

  setTimeout(() => {
    alerta.classList.remove('show');
    setTimeout(() => {
      alertContainer.removeChild(alerta);
    }, 150);
  }, 2000);
}