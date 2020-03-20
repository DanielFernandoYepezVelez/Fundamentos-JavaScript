/* SOLO SE PUEDE EJECUTAR UN EVENTO A LA VEZ */
/* FORMA #1 */
/* Evento De Click El Mas Usado */
const button = document.getElementById('button');

/* El evento tiene informacion muy importante y entre
esa informacion tiene el metodo .preventDefault(), lo que permite 
cancelar el comportamiento de los formularios, o enlaces
por defecto que les da el navegador, este metodo se utiliza mucho
para las SPA*/
// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Click Al Boton');
// });

/* FORMA #2 */
/* Del parametro "event" o "e" lo mas importante es el TARGET */
button.addEventListener('click', ejecutarBoton);

function ejecutarBoton(e) {
    e.preventDefault();
    console.log(e);
    /* Aqui estoy Accediendo al elemento con target */
    console.log(e.target);
    /* Aqui estoy Accediendo al id del elemento con target */
    console.log(e.target.id);
    /* Aqui estoy Accediendo a la clase del elemento con target */
    console.log(e.target.className);
    /* Aqui estoy Accediendo a la clase del elemento con target */
    console.log(e.target.classList);
    /* Convertir en Un Array */
    tokenList = e.target.classList
    tokenConvertido = Array.from(tokenList);
    console.log('Array: ', tokenConvertido);
    /* Tipo De evento que el usuario ejecuto(CLICK) */
    console.log('EVENTO: ', e.type);
    console.log('--------------------------------------------------');
}

/* FORMA #3 */
const texto = document.querySelector('h1').addEventListener('click', function(e) {
    // let nuevoTexto = e.target.innerHTML = 2 + 2; puedo ejecutar operaciones
    nuevoTexto = e.target.innerHTML = 'Texto Modificado';
    console.log(nuevoTexto);
    console.log('--------------------------------------------------');
});


/* EVENTO CON EL DOUBLE CLICK */
const segundoButton = document.querySelector('.segundo-button');

segundoButton.addEventListener('dblclick', dobleClick);

function dobleClick(e) {
    e.preventDefault();
    console.log('EVENTO:', e.type);
    console.log('--------------------------------------------------');
}