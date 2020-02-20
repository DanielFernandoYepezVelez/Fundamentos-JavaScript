/* El metodo bind, me sirve para
que mi funcion del evento pueda
recibir ARGUMENTOS */
const boton = window.document.getElementById('boton');
let contador = 0;
boton.addEventListener('click', addBotton);

function addBotton() {
    let bottonChild = window.document.createElement('div');
    const nameElement = 'Element Child ' + contador;

    bottonChild.innerHTML = nameElement;
    bottonChild.classList.add('botton-child');

    bottonChild.addEventListener('click', saludar.bind(null, nameElement));
    window.document.body.appendChild(bottonChild);

    contador++;
}

/* Aqui llega el argumento nameElement*/
/* e.target me permite acceder como si fuera
el nombre de la variable donde se almacena
un elemento o nodo. en este caso es como si
estuvieramos escribiendo bottonChild.style OJO!!!!*/
function saludar(name, e) {
    console.log('Hello I am a Element Child ' + name);
    e.target.style.background = 'red';
}