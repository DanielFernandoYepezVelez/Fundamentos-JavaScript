/* DELEGATION */
/* Esperar un evento en cualquier parte del document
es decir, a cualquier elemento del DOM y comprobar 
a taves de sus clases, si es lo que se necesita para 
que se active alguna ejecución en el sistema. */

/* Esto nos sirve para optimizar y no crear
un evento(event Listener) para cada elemento que tiene
la misma funcionalidad que otros */

/* Esto tambien me ayuda mucho para eliminar elementos,
con un poco de ayuda del Traversing */

/* Esto Nos Sirve Para Activar el evento
En cualquier parte del documento */
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();

    if (e.target.classList.contains('buttonClassOne')) {
        console.log('SI!!!');
        // console.log(e.target.parentElement);
        console.log(e.target.previousElementSibling.remove());
    } else {
        console.log('NO!!!!');
    }
}