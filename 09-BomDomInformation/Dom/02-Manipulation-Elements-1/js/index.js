/* Crear un nuevo nodo o etiqueta desde 
JavaScript y Adjuntarlo en el Body del HTML */
const paragraphs = window.document.createElement('p');
paragraphs.innerHTML = 'HEllo World!';

/* Si solo es requerido agregar el elemento
en todo el body, posicion no especificada */
window.document.body.appendChild(paragraphs);
console.log('---------------------------------');

/*El nuevo nodo creado adjuntarlo en el
id indicado en el HTML */
const app = window.document.getElementById('app');
app.appendChild(paragraphs);
console.log('---------------------------------');

/* Creando Un nodo con etiquetas en Mayúsculas */
const block = window.document.createElement('DIV');

/* Agregamos Una Clase */
block.className = 'enlace';

/* Agregamos Un Id */
block.id = 'nuevo-id';

/* Asignando estilos al elemento creado(DIV) */
block.style.width = '200px';
block.style.height = '200px';
block.style.backgroundColor = 'red';
// block.style.textAlign = 'center';
// block.style.lineHeight = '200px'

// block.innerHTML = '<h1>Hello World</h1>';
block.innerHTML = `
  <ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
  </ul>
`;
app.appendChild(block);
console.log('---------------------------------');