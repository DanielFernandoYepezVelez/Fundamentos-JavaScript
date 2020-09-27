/* Detectar Si Tengo Internet O No Con Una Api Nativa De JavaScript
 */

// navigator.online(Para La Consola Del Navegador) RETORNA UN BOOLEANO

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);


function actualizarEstado() {
    if (navigator.onLine) {
        console.log('....Si Tienes Conexión A Internet');
    } else {
        console.log('....No Tienes Conexión A Internet');
    }
}