/*
ATRIBUTOS DE LOS ELEMENTOS(NODOS) =>
/* ME FUNCIONA TAMBIEN PARA CUANDO TENGO ATRIBUTOS DEFINIDOS DE FORMA PERSONALIZADA COMO POR EJEMPLO => data_id = 1 EN UN ELEMENTO O NODO;

element.hasAttribute('attribute');
element.getAttribute('attribute');
element.setAttribute('attribute', value);
element.removeAttribute('attribute');
------------------------------------------

CLASES DE LOS ELEMENTOS(NODOS) =>
element.classList.add('class', 'class', ...);
element.classList.remove('class', 'class', ...);
element.classList.toggle('class',[,force]); 
element.classList.contains('class');
element.classList.replace('oldClass', 'newClass');

Agregale una nueva o varias nuevas clases al elemento.
remueve una clase o varias clases del elemento.
Si tiene la clase se la quita y si no la tiene se la pone.
valida si contiene una clase actualmente.
Reemplaza la clase actual por una nueva.
--------------------------------------------

ATRIBUTOS DIRECTOS O ESTABLECIDOS EN LOS ELEMENTOS(NODOS) =>
id,
value,
data_id
*/

/* AQUI ESTOY ASIGNANDO LOS ATRIBUTOS DE FORMA DIRECTA AL ELEMENTO */
/* MANIPULAR LOS ATRIBUTOS */
const link = window.document.getElementById('link');
console.log(link);

/* Comprueba que un elemento tenga el nombre de un 
atributo de un elemento mas no su respectivo valor
y si es asi, obtengo el valor de dicho atributo */
if (link.hasAttribute('href')) {
    console.log('Valor Atributo', link.getAttribute('href'));
}
console.log('---------------------------------');

/* Asignarle un atributo y su valor a un elemento
desde javascript a una etiqueta o nodo */
link.setAttribute('class', 'green');
console.log(link);
console.log('todos los Atributos del nodo =>', link.attributes);
console.log('---------------------------------');

/* Tambien puedo obtener atributos o ids */
const verAttribute = link.getAttribute('href');
console.log(verAttribute);

/* Remover un atributo de un nodo
o etiqueta desde JavaScript */
link.removeAttribute('rel');
console.log(link);
console.log('---------------------------------');

/* Controlar la clases de forma directa,
es decir, puedo agregar clases sin la
necesidad de especificar el valor de
dicha clase.por que se agrega el valor de
forma directa, es decir, aqui obtengo clases 
o las elimino y estas clases estan en el 
archivo CSS*/
const verNameClass = link.className;
console.log('Nombre de la clase =>', verNameClass);
console.log('---------------------------------');

const addClass = link.classList.add('red');
const addClassTwo = link.classList.add('roboto');
const verClases = link.classList; // puedo ver el arreglo de clasess
console.log(addClass);
console.log(addClassTwo);
console.log(verClases);
console.log(link);
console.log('---------------------------------');

link.classList.remove('red');
console.log(link);
console.log('---------------------------------');

/*Para verificar si tiene una clase
con el nombre aqui indicado*/
if (link.classList.contains('red')) {
    console.log('Contiene la clase rojo', link);
} else {
    console.log('No Contiene la clase rojo', link);
}
console.log('---------------------------------');