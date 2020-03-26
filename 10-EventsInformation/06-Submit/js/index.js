/* EVENTO SUBMIT */
/* La funcionalidad principal de este evento es
enviar a traves de un click todo un formulario */

/* Accediendo al DOM */
const formularioCompleto = document.querySelector('#formulario');

/* Eventos Usuario */
// eventosUsuarios();

// function eventosUsuarios() {
formularioCompleto.addEventListener('submit', enviandoForm);
// }

function enviandoForm(e) {
    e.preventDefault();
    console.log('recibiendo todo el FORMULARIO: => ', e.target);
}