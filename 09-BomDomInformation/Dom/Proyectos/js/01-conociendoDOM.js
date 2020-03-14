// Eliminar de Local Storage
// localStorage.clear();

/* Me entrega todo lo que se ve en el
navegador */
let DOM;

DOM = document;
console.log(DOM);
console.log('---------------------------');

/* Filtrar y traerme solo lo que ocupa
o utiliza el HTML del DOM */
let documentComplete;

documentComplete = document.all;
documentComplete10 = document.all[10];
documentCompleteHead = document.head;
documentCompleteBody = document.body;
documentCompleteDomain = document.domain;
documentCompleteURL = document.URL;
documentCompleteLanguage = document.characterSet;
documentCompleteForms = document.forms;
documentCompleteFormsPosicion = document.forms[0];
documentCompleteFormsPosicionId = document.forms[0].id;
documentCompleteFormsClassName = document.forms[0].className;
documentCompleteFormsClassList = document.forms[0].classList;
documentCompleteFormsClassListArray = document.forms[0].classList[1];
documentCompleteImages = document.images;
documentCompleteImagesDos = document.images[2];
documentCompleteImagesSrc = document.images[2].src;
documentCompleteImagesSrcAttribute = document.images[2].getAttribute('src');
documentCompleteScripts = document.scripts;

console.log(documentComplete);
console.log(documentComplete10);
console.log(documentCompleteHead);
console.log(documentCompleteDomain);
console.log(documentCompleteURL);
console.log(documentCompleteLanguage);
console.log(documentCompleteForms);
console.log(documentCompleteForms);
console.log(documentCompleteFormsPosicion);
console.log(documentCompleteFormsPosicionId);
console.log(documentCompleteFormsClassName);
console.log(documentCompleteFormsClassList);
console.log(documentCompleteFormsClassListArray);
console.log(documentCompleteImages);
console.log(documentCompleteImagesDos);
console.log(documentCompleteImagesSrc);
console.log(documentCompleteImagesSrcAttribute);
console.log(documentCompleteScripts);
console.log('---------------------------');

/* Con esto puedo convertir cualquier
HTMLCollections en un arreglo */
let images = document.images;
let imagesArray = Array.from(images);

console.log(images);
console.log(imagesArray);

/* Recorrer Imagenes */
imagesArray.forEach(function(imagen) {
    console.log(imagen);
});
console.log('---------------------------------');