// Importar la clase Estudiante de otro archivo
import { Estudiante } from './Clases/Estudiante.js';

document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formulariDatos');
  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nameEstudiante').value;
    const apellidos = document.getElementById('apeEstudiante').value;
    const carrera = document.getElementById('CarreraEstudiante').value;
    const ciclo = parseInt(document.getElementById('cicloEstudiante').value, 10);

    try {
      const estudiante = new Estudiante(nombre, apellidos, carrera, ciclo);
      // Suponiendo que la clase Estudiante tiene un método guardar
      estudiante.guardar();
      agregarEstudianteAlDOM(estudiante);
      mostrarAlerta('Estudiante agregado correctamente', 'success');
    } catch (error) {
      alert('Ha ocurrido un error: ' + error.message);
    }
  });

  // Actualizar el listado de estudiantes al cargar la página
  actualizarListadoEstudiantes();
});

function obtenerEstudiantes() {
  return JSON.parse(localStorage.getItem('estudiantes')) || [];
}

function actualizarListadoEstudiantes() {
  const estudiantesCards = document.getElementById('estudiantesCards');
  const mensajeNoEstudiantes = document.getElementById('mensajeNoEstudiantes');
  // Primero, limpiar el contenido actual
  estudiantesCards.innerHTML = '';

  const estudiantes = obtenerEstudiantes();
  
  // Ahora, si no hay estudiantes, mostrar el mensaje
  if (estudiantes.length === 0) {
    mensajeNoEstudiantes.style.display = 'block';
    mensajeNoEstudiantes.innerText = 'No hay registros guardados'; 
  } else {
    mensajeNoEstudiantes.style.display = 'none'; 
    estudiantes.forEach((estudianteData, index) => {
      const estudiante = new Estudiante(
        estudianteData.nombre,
        estudianteData.apellidos,
        estudianteData.carrera,
        estudianteData.ciclo
      );
      agregarEstudianteAlDOM(estudiante, index);
    });
  }
}

function agregarEstudianteAlDOM(estudiante, index) {
  const estudiantesCards = document.getElementById('estudiantesCards');
  const mensajeNoEstudiantes = document.getElementById('mensajeNoEstudiantes');
  
  if (index === undefined) {
    // Se llama desde el formulario de creación
    let estudiantes = obtenerEstudiantes();
    estudiantes.push({
      nombre: estudiante.nombre,
      apellidos: estudiante.apellidos,
      carrera: estudiante.carrera,
      ciclo: estudiante.ciclo
    });
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    index = estudiantes.length - 1;
  }

  // Añade el HTML del estudiante directamente, asumiendo que toCardHTML devuelve el HTML correcto
  estudiantesCards.insertAdjacentHTML('beforeend', estudiante.toCardHTML(index));

  if (mensajeNoEstudiantes.style.display === 'block') {
    mensajeNoEstudiantes.style.display = 'none';
  }

  // Asignar el evento de eliminar al nuevo botón de eliminar
  const deleteButton = estudiantesCards.lastElementChild.querySelector('.delete-estudiante');
  if (deleteButton) {
    deleteButton.addEventListener('click', manejarEliminar);
  }
}


function manejarEliminar(event) {
  const index = parseInt(event.target.getAttribute('data-index'), 10);
  eliminarEstudiante(index);
  eliminarEstudianteDelDOM(index);
}

function eliminarEstudianteDelDOM(index) {
  // Encuentra la tarjeta de estudiante que coincida con el 'data-index'
  const estudianteCard = document.getElementById(`estudiante-card-${index}`);
  if (estudianteCard) {
    // Añade la clase para la animación de salida y define la duración
    estudianteCard.classList.remove('animate__zoomIn');
    estudianteCard.classList.add('animate__fadeOut');

    // Escucha por el evento 'animationend' para saber cuando la animación de salida ha terminado
    estudianteCard.addEventListener('animationend', function handleAnimationEnd() {
      estudianteCard.remove(); // Elimina la tarjeta del DOM una vez que la animación ha terminado
      estudianteCard.removeEventListener('animationend', handleAnimationEnd); // Limpia el evento

      // Verifica si la lista está vacía después de la eliminación
      const estudiantesCards = document.getElementById('estudiantesCards');
      if (!estudiantesCards.hasChildNodes()) {
        // Si no hay más tarjetas, muestra el mensaje
        const mensajeNoEstudiantes = document.getElementById('mensajeNoEstudiantes');
        mensajeNoEstudiantes.style.display = 'block';
        mensajeNoEstudiantes.textContent = 'No hay registros guardados';
      }
    });
  }
}

function eliminarEstudiante(index) {
  let estudiantes = obtenerEstudiantes();
  estudiantes.splice(index, 1);
  localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
  mostrarAlerta('Estudiante eliminado correctamente', 'success');
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
