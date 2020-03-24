/* PADRE - HIJO */
/* El traversing me sirve para recorrer todo
el DOM. El orden de los elementos es padre-hijo,
algo que con css no es posible */

/* El traversing existe por que en CSS
hoy en dia no existe un selector que pueda
ir de un selector hijo a un selector padre.
Aunque en CSS si existen los selectores que van
del padre al hijo, entonces en javaScript por
medio del traversing si se puede ir del
HIJO al PADRE(Selectores).
*/

/* QUE ES UN NODO
Todas las conexiones en el DOM,
es decir, los nodos son todo el HTML
del documento.En conclusión, los nodos
son las etiquetas HTML. El nombre
de las etiquetas o nodos los podemos obtener
a traves de la propiedad nodeName */

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

/*EN CAMBIO "children" me retorna exactamente
los elementos sin espacios en blanco, y tambien
me permite acceder de forma interna a los
elementos, es decir, dentro hacia dentro de forma
progresiva */

// Aqui me entrega el HTMLCollection(array) de los hijos
// del elemento o nodo navigation que alberga el
// id que fue obtenido a traves del querySelector
// y este es el elemento, etiqueta o nodo PADRE.
console.log(navigation.children);

/* Aqui me esta entregrando el nombre del nodo
 o etiqueta PADRE*/
console.log(navigation.nodeName);

/* Aqui me esta entregando el nombre de la 
etiqueta o nodo hijo que esta en la posición
CERO(0) del array*/
console.log(navigation.children[0].nodeName);

/* Aqui me esta entregando el nombre de la 
etiqueta o nodo hijo que esta en la posición
UNO(1) del array */
console.log(navigation.children[1].nodeName);

/* Aqui hay un ejemplo de como vamos ingresando
del elemento padre al hijo en la posición CERO(0)
pero a su vez es padre de un elemento hijo en la
posición UNO(1) y asi funciona sucesivamente */
// console.log(navigation.children[0].children[1].children[0]);
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
el HTML(DOM)*/
console.log(navigation.nodeType);
console.log(navigation.children[0].nodeType);
console.log(navigation.children[1].nodeType);
console.log('---------------------------');

/* Puedo utilizar un elemento padre para
acceder a los hijos y puedo aplicar las mismas
propiedades que le aplico a los otros selectores. 
En este caso especificamente navigation es
el elemento PADRE. */
navigation.children[0].style.backgroundColor = 'aqua';
navigation.children[0].style.color = 'black';
navigation.children[0].style.padding = '5px';
navigation.children[0].style.fontSize = '20px';
navigation.children[0].style.textDecoration = 'none';
navigation.children[0].style.display = 'block';
navigation.children[0].style.marginBottom = '5px';

navigation.children[1].style.backgroundColor = 'red';
navigation.children[1].style.color = 'black';
navigation.children[1].style.padding = '5px';
navigation.children[1].style.fontSize = '20px';
navigation.children[1].style.textDecoration = 'none';
navigation.children[1].style.display = 'block';
navigation.children[1].style.marginBottom = '5px';

navigation.children[2].style.backgroundColor = 'blue';
navigation.children[2].style.color = 'black';
navigation.children[2].style.padding = '5px';
navigation.children[2].style.fontSize = '20px';
navigation.children[2].style.textDecoration = 'none';
navigation.children[2].style.display = 'block';
navigation.children[2].style.marginBottom = '5px';

navigation.children[3].style.backgroundColor = 'yellow';
navigation.children[3].style.color = 'black';
navigation.children[3].style.padding = '5px';
navigation.children[3].style.fontSize = '20px';
navigation.children[3].style.textDecoration = 'none';
navigation.children[3].style.display = 'block';
navigation.children[3].style.marginBottom = '5px';

navigation.children[4].style.backgroundColor = 'black';
navigation.children[4].style.color = 'white';
navigation.children[4].style.padding = '5px';
navigation.children[4].style.fontSize = '20px';
navigation.children[4].style.textDecoration = 'none';
navigation.children[4].style.display = 'block';
navigation.children[4].style.marginBottom = '5px';

console.log(navigation.children[0].textContent = 'Reescribiendo Un Enlace Hijo Uno');
console.log(navigation.children[1].textContent = 'Reescribiendo Un Enlace Hijo Dos');
console.log(navigation.children[2].textContent = 'Reescribiendo Un Enlace Hijo Tres');
console.log(navigation.children[3].textContent = 'Reescribiendo Un Enlace Hijo Cuatro');
console.log(navigation.children[4].textContent = 'Reescribiendo Un Enlace Hijo Cinco');
console.log('---------------------------');

/* Aqui tambien por medio de elemento o nodo
padre estoy accediendo a su primer y ultimo hijo
de forma directa y estoy alterando sus estilos */
const padre = document.querySelectorAll('#principal');
console.log(padre[0].firstElementChild.style.innerHTML = 'Soy el primer Hijo');
console.log(padre[0].lastElementChild.style.innerText = 'Soy el ultimo Hijo');
console.log('---------------------------');

/* Aqui Estoy contando el numero de nodos o 
elementos hijos que tiene el nodo o elemento PADRE */
console.log(padre[0].childElementCount);
console.log('---------------------------');