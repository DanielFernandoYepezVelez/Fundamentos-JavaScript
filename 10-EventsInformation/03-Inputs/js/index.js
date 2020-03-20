const inputText = document.querySelector('#inputText');

/* Obtengo el valor del input al presionar las teclas */
/* inputText.addEventListener('keydown', obtenerInfo);

function obtenerInfo(e) {
    console.log(inputText.value);
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* Obtengo el valor del input al levantar las teclas */
/* inputText.addEventListener('keyup', obtenerInfo);

function obtenerInfo(e) {
    console.log(inputText.value);
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* Obtengo el valor del input al solo al escribir con las teclas */
/* inputText.addEventListener('keypress', obtenerInfo);

function obtenerInfo(e) {
    document.querySelector('h1').textContent = inputText.value;
    console.log(inputText.value);
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* Focus solo se activa solo cuando doy click en el input */
/* inputText.addEventListener('focus', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* UTILIZADO POR MUCHO, Se utiliza mucho para validar
formularios, se activa cuando doy click por fuera del input
y asi puedo comprobar si se ingresaron los caracteres correctos
o si existen inputs vacios */
/* inputText.addEventListener('blur', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* ESTOS EVENTOS SE VEN REFLEJADOS PARA CUANDO SE QUIEREN COPIAR NOTICIAS
DE LA WEB Y NO SE DEJA O DICE QUE NO ES POSIBLE */
/* El evento se dispara para cuando corto el texto dentro del input */
/* inputText.addEventListener('cut', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* El evento se dispara para cuando copio el texto dentro del input */
/* inputText.addEventListener('copy', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* El evento se dispara para cuando pego el texto dentro del input */
/* inputText.addEventListener('paste', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
} */

/* ESTE EVENTO ESTA RELACIONADO CON TODOS LOS DEMAS,
ES COMO TODO EN UNO, COPIAR, PEGAR, CORTAR, KEYDOWN, KEYUP, ETC */
inputText.addEventListener('input', obtenerInfo);

function obtenerInfo(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
}

/* Este ultimo evento se utiliza mas que todo para los selects */
const select = document.getElementById('select');

select.addEventListener('change', obtenerSelect);

function obtenerSelect(e) {
    console.log('EVENTO: ', e.type);
    console.log('----------------------------');
}