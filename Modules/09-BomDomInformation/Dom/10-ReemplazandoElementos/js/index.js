const nuevoEncabezado = document.createElement('h2');

/* Agregar id */
nuevoEncabezado.id = 'encabezado';

/* Agregar Nuevo Texto */
/* Para Utilizar appenchild() debe siempre
existir un PADRE */
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

/* Elemento que se va a reemplazar */
const anterior = document.querySelector('#encabezado');

/* Elemento Padre */
const elPadre = document.querySelector('#lista-cursos');

/* Reemplazar */
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);
console.log(anterior.parentElement);