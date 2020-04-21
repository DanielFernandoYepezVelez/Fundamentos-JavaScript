// INSERTAR, AGREGAR O REEMPLAZAR ELEMENTOS DEBEN SER DESDE EL ELEMENTO PADRE, es decir, se debe indicar el elemento padre como referencia para elegir la posicion del elemento HIJO.

/* PERO UN ELEMENTO HIJO PUEDE SER ELMINADO EN SI MISMO O DIRECTAMENTAMENTE CON LA PALABRA "remove()" O TAMBIEN DEPENDIENDO DE UN ELEMENTO PADRE CON LA PALABRA "removeChild()". */

/* Crear un nuevo nodo o etiqueta desde 
JavaScript y Adjuntarlo en el Body del HTML */
const paragraphs = window.document.createElement('p');

/* Agregamos Un Id */
paragraphs.id = 'etiquetaUno';

/* Agregamos Una Clase */
paragraphs.className = 'claseUno';

/* Agregando Contenido Al elemento o Nodo Creado */
paragraphs.innerHTML = 'HEllo World Modificado!';

/* Asignando estilos EN LINEA al elemento creado(p) */
paragraphs.style.textAlign = 'center';
paragraphs.style.color = 'red';
paragraphs.style.fontSize = '2rem';
paragraphs.style.fontWeight = 'bold';
paragraphs.style.padding = '1rem';
paragraphs.style.backgroundColor = '#000000';

/* Ver Elemento En Consola */
console.log(paragraphs);

/* Si solo es requerido agregar el elemento
en todo el body, posicion no especificada */
window.document.body.appendChild(paragraphs);
console.log('---------------------------------');

/*El nuevo nodo creado, adjuntarlo en un lugar especifico
del DOM, en este caso es el ID indicado en el HTML */
const app = window.document.getElementById('app');
console.log(app);

app.appendChild(paragraphs);
console.log('---------------------------------');

/* Creando Un nodo, elemento o etiqueta desde JS */
const block = window.document.createElement('div');

/* Agregamos Una Clase */
block.className = 'enlace';

/* Agregamos Un Id */
block.id = 'nuevo-id';

/* Agregamos Contenido al Elemento Creado 
innerHTML es el unico que entiende las
etiqueta de HTML, por eso se utiliza
este para crear el texto o contenido
de un elemto, etiqueta o nodo */
block.innerHTML = `
  <ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
  </ul>
`;

/* Asignando estilos al elemento creado(DIV) */
block.style.width = '200px';
block.style.height = '120px';
block.style.backgroundColor = '#000';
block.style.padding = '0 .5rem';
block.style.color = '#fff';
block.style.fontSize = '2rem';
// block.style.textAlign = 'center';
// block.style.lineHeight = '200px'

app.appendChild(block);
console.log('---------------------------------');

// document.createTextNode('holamundo'); CONSULTAR SOBRE ESTO ES SIMPLE PERO IMPORTANTE