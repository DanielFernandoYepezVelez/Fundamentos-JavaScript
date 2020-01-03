/* MANIPULAR LOS ATRIBUTOS */
const link = window.document.getElementById('link');
console.log(link);

/* Comprueba que un elemento tenga un atributo
elegido y si es asi, obtengo el valor de dicho
atributo */
if (link.hasAttribute('href')) {
    console.log('Valor Atributo', link.getAttribute('href'));
}
console.log('---------------------------------');

/* Asignarle un atributo
desde javascript a una etiqueta o nodo */
link.setAttribute('class', 'green');
console.log(link);
console.log(link.attributes);
console.log('---------------------------------');

/* Remover un atributo de un nodo
o etiqueta desde JavaScript */
link.removeAttribute('rel');
console.log(link);
console.log('---------------------------------');

/* Controlar la clases de forma directa,
es decir, puedo agregar clases sin la
necesidad de especificar el valor de
dicha clase.por que se agrega el valor de
forma directa */
link.classList.add('red');
link.classList.add('roboto');
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