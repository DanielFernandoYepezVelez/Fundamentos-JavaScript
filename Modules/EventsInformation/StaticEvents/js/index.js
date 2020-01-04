/* Todo Evento AddEvenListener
tiene el objeto por defecto "event" */
const boton = window.document.getElementById('boton');

function gretting(e) {
    console.log('Hello World!!!!!');
}
boton.addEventListener('click', gretting);

/* ----------------------------------- */
let isRed = false;

function changeColor(e) {
    if (isRed) {
        e.target.style.backgroundColor = 'green';
        // boton.style.backgroundColor = 'green';
        isRed = false;
    } else {
        e.target.style.backgroundColor = 'red';
        // boton.style.backgroundColor = 'red';
        isRed = true;
    }
}
boton.addEventListener('dblclick', changeColor);

/* ------------------------ */
const body = window.document.body;

function addParagraphs() {
    const paragraphs = window.document.createElement('p');
    paragraphs.innerHTML = 'I am a PARAGRAPHBS';
    body.appendChild(paragraphs);
}

boton.addEventListener('click', addParagraphs);