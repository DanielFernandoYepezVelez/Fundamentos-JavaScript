/* El traversing existe por que en CSS
hoy en dia no existe un selector que pueda
ir de un selector hijo a un selector padre,
aunque en CSS si existen los selectores que van
del padre al hijo, entonces en javaScript por
medio del traversing si se puede ir del
HIJO al PADRE(Selectores).
 */

/* QUE ES UN NODO
Todas las conexiones en el DOM,
es decir, los nodos son todo el HTML
del documento.En conclusión, los nodos
son las etiquetas HTML, como lo podemos ver
en la parte inferior con nodeName */

const navigation = document.querySelector('#principal');
console.log(navigation);

/* Me muestra en los nodos las palabra
text, por que es el espacio en blanco
que existe de un nodo a otro, es decir,
la distancia entre los elementos o etiquetas*/
/* childNodes me retorna los
elementos hijos, pero tambien
me devuelve los espacios en blanco
por medio de la palabra text */
console.log(navigation.childNodes);
console.log('---------------------------');

/*children me retorna exactamente
los elementos, sin espacios en blanco, y tambien
me permite acceder de forma interna a los
elementos, es decir, dentro hacia dentro de forma
progresiva */
// console.log(navigation.children[0].children[1].children[0]);
console.log(navigation.children);
console.log(navigation.children[0].nodeName);
console.log(navigation.nodeName);
console.log('---------------------------');

/* Los tipos de nodos generalmente retornan
un número.
1 = Etiquetas HTML.
2 = Atributos de las etiquetas HTML.
3 = Text Node. Texto del NODO o ELEMENTO.
8 = SON Comentarios .
9 = SON DocumentoS.
10 = doctype.
Estos son los diferentes tipos de nodos
pero al final todos estos nodos conforman
el HTML*/
console.log(navigation.children[0].nodeType);
console.log('---------------------------');

/* Puedo utilizar un elemento padre para
acceder a los hijos y puedo aplicar
las mismas propiedades que le aplico
a los selectores. */
console.log(navigation.children[0].textContent = 'Reescribiendo Un Enlace Hijo Uno');
navigation.children[0].style.backgroundColor = 'aqua';
navigation.children[0].style.color = 'black';
navigation.children[0].style.padding = '5px';
navigation.children[0].style.fontSize = '20px';
console.log('---------------------------');

const padre = document.querySelectorAll('#principal');

console.log(padre[0].lastElementChild);
console.log(padre[0].childElementCount);
console.log(padre[0].firstElementChild);
console.log('---------------------------');