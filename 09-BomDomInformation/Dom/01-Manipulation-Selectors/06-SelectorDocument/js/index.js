/* Obtengo Todo lo que tengo en el DOM(HTML) */
let elemento = document;
console.log('Document => ', elemento);
console.log('-----------------------------------------');

/* Obtengo Todo lo del DOM(HTML) pero me lo entrega o me lo devuelve con un formato tipo array, es decir,cada elemento o nodo tiene su respectivo indice */
let elementoAll = document.all;
console.log('Document All => ', elementoAll);
console.log('-----------------------------------------');

/* Accedo al el elemento número 11 de todo el DOM(HTML)*/
let elementoArray = document.all[11];
console.log('Document All Array => ', elementoArray);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) HEAD */
let elementoHead = document.head;
console.log('Document Head => ', elementoHead);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) BODY*/
let elementoBody = document.body;
console.log('Document Body => ', elementoBody);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) DOMAIN*/
let elementoDomain = document.domain;
console.log('Document Domain => ', elementoDomain);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) URL */
let elementoUrl = document.URL;
console.log('Document URL => ', elementoUrl);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) Character Set */
let elementoCharacterSet = document.characterSet;
console.log('Document Character Set => ', elementoCharacterSet);
console.log('-----------------------------------------');

/* Acceder A segmentos del DOM(HTML) Tipo Array Forms */
let elementoForms = document.forms;
console.log('Document Forms => ', elementoForms);
console.log('-----------------------------------------');

/* Array */
let elementoArrayForms = document.forms[0];
console.log('Document Array Forms => ', elementoArrayForms);
console.log('-----------------------------------------');

/* ID */
let elementoIdForms = document.forms[0].id;
console.log('Document ID Forms => ', elementoIdForms);
console.log('-----------------------------------------');

/* CLASE */
/* Este es tipo estring, es deicr, me devuelve el numero de clase
que tenga el elemento una al lado de la otra, como un string */
let elementoClaseForms = document.forms[0].className;
console.log('Document CLASSNAME Forms => ', elementoClaseForms);
console.log('-----------------------------------------');

/* Este es tipo Array y es para cuando tengo mas de una sola clase */
let elementoClaseTwoForms = document.forms[0].classList;
console.log('Document CLASSLIST Forms => ', elementoClaseTwoForms);

elementoClaseTwoForms = document.forms[0].classList[1];
console.log('Document CLASS TWO Forms => ', elementoClaseTwoForms);
console.log('-----------------------------------------');

/* Para Obtener el numero de imagenes, es un formato tipo
array, y puedo acceder a cada una de ellas através de su indice 
y tambien a sus respectivos atributos */
let imagenes = document.images;
console.log('Document Images =>', imagenes);

/* Convertir Un HTMLCollection a un array(Cualquier Caso) 
Cuando esto se convierte en un array dispongo de todos los
métodos que se le pueden aplicar a los arrays*/
let arrayImagenes = Array.from(imagenes);
console.log('Document Array Imagenes =>', arrayImagenes);

arrayImagenes.forEach(function(imagen) {
    console.log('Imagenes Recorridos En Ciclo => ', imagen);
});
console.log('-----------------------------------------');

/* Para Obtener Los Scripts Existentes en el DOM(HTML) */
let scripts = document.scripts;
console.log('Document Scripts =>', scripts);
console.log('-----------------------------------------');