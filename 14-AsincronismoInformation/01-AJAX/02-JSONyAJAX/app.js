/* Accediendo al DOM */
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

/* Eventos Del Usuario Y El Sistema */
boton1.addEventListener('click', obtenerEmpleado);
boton2.addEventListener('click', obtenerEmpleados);

/* Funcionalidad Para Obtener Los Empleado Con AJAX */
function obtenerEmpleado() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './empleado.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const htmlEmpleado = document.querySelector('#empleado');
            const empleado = JSON.parse(this.responseText);

            const htmlTemplate = `
                <ul>
                  <li>ID: ${empleado.id}</li>
                  <li>Nombre: ${empleado.nombre}</li>
                  <li>Empresa: ${empleado.empresa}</li>
                  <li>Actividades: ${empleado.trabajo}</li>
                </ul>
            `
            htmlEmpleado.innerHTML = htmlTemplate;
        }
    }
    xhr.send();
}

/* Funcionalidad Para Obtener Los Empleados Con AJAX */
function obtenerEmpleados() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './empleados.json', true);

    xhr.onload = function() {

        if (this.status === 200) {
            const htmlEmpleados = document.querySelector('#empleados');
            const empleados = JSON.parse(this.responseText);
            let htmlTemplate = ``;

            /* Se concatena para mostrar todos los objetos JSON */
            empleados.forEach(function(empleado) {
                htmlTemplate += `
                <ul>
                  <li>ID: ${empleado.id}</li>
                  <li>Nombre: ${empleado.nombre}</li>
                  <li>Empresa: ${empleado.empresa}</li>
                  <li>Actividades: ${empleado.trabajo}</li>
                </ul>
            `;
            });

            htmlEmpleados.innerHTML = htmlTemplate;
        }
    }

    xhr.send();
}