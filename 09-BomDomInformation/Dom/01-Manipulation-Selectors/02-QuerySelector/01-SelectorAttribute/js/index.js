/* OBTENER */
/* Obtener solo nombre del ID através de su etiqueta */
const tag = document.querySelector('h1');
console.log(tag);

const id = tag.id;
console.log(id);
console.log('----------------------------');

/* Obtener solo nombre de la CLASE */
const clase = document.querySelector('.pruebaClase');
console.log(clase);

const className = clase.className;
console.log(className);
console.log('----------------------------');

/* Obtener nombre del ID */
const idTwo = document.querySelector('#pruebaID');
console.log(idTwo);

const idName = idTwo.id;
console.log(idName);
console.log('----------------------------');

/* Obtener nombre del atributo de tipo clase */
const typeClass = document.querySelector('[class=otraPruebaClase]');
console.log(typeClass);

const typeClassName = typeClass.className;
console.log(typeClassName);
console.log('----------------------------');

/* Obtener solo CONTENIDO del NODO o ELEMENTO */
const tagContent = document.querySelector('h1');
console.log(tagContent);

let getcontent1 = tagContent.textContent;
let getcontent2 = tagContent.innerText;
let getcontent3 = tagContent.innerHTML;

console.log(getcontent1);
console.log(getcontent2);
console.log(getcontent3);

const classContent = document.querySelector('.pruebaClase');
console.log(classContent);

getcontent1 = classContent.textContent;
getcontent2 = classContent.innerText;
getcontent3 = classContent.innerHTML;

console.log(getcontent1);
console.log(getcontent2);
console.log(getcontent3);

const idContent = document.querySelector('#pruebaID');
console.log(idContent);

getcontent1 = idContent.textContent;
getcontent2 = idContent.innerText;
getcontent3 = idContent.innerHTML;

console.log(getcontent1);
console.log(getcontent2);
console.log(getcontent3);

const AttributeContent = document.querySelector('[type=pruebaType]');
console.log(AttributeContent);

getcontent1 = AttributeContent.textContent;
getcontent2 = AttributeContent.innerText;
getcontent3 = AttributeContent.innerHTML;

console.log(getcontent1);
console.log(getcontent2);
console.log(getcontent3);
console.log('----------------------------');

/* MODIFICAR */
/* Modificar CONTENIDO del NODO o ELEMENTO */
const tagModify = document.querySelector('h1');
console.log(tagModify);

let setText1 = tagModify.textContent = 'The New TAG!';
let setText2 = tagModify.innerText = 'The New TAG!';
let setText3 = tagModify.innerHTML = 'The New TAG!';

console.log(setText1);
console.log(setText2);
console.log(setText3);

const classModify = document.querySelector('.pruebaClase');
console.log(classModify);

setText1 = classModify.textContent = 'The New CLASE!';
setText2 = classModify.innerText = 'The New CLASE!';
setText3 = classModify.innerHTML = 'The New CLASE!';

console.log(setText1);
console.log(setText2);
console.log(setText3);

const idModify = document.querySelector('#pruebaID');
console.log(idModify);

setText1 = idModify.textContent = 'The New ID!';
setText2 = idModify.innerText = 'The New ID!';
setText3 = idModify.innerHTML = 'The New ID!';

console.log(setText1);
console.log(setText2);
console.log(setText3);

const attributeModify = document.querySelector('[class=otraPruebaClase]');
console.log(attributeModify);

setText1 = attributeModify.textContent = 'The New ATTRIBUTE!';
setText2 = attributeModify.innerText = 'The New ATTRIBUTE!';
setText3 = attributeModify.innerHTML = 'The New ATTRIBUTE!';

console.log(setText1);
console.log(setText2);
console.log(setText3);
console.log('----------------------------');

/* Modificar CSS desde JavaScript */
/* TAG */
tag.style.background = 'black';
tag.style.color = 'white';
tag.style.padding = '20px';
tag.style.textAlign = 'center';

/* CLASE */
clase.style.background = 'black';
clase.style.color = 'white';
clase.style.padding = '20px';
clase.style.textAlign = 'center';

/* IDTWO */
idTwo.style.background = 'black';
idTwo.style.color = 'white';
idTwo.style.padding = '20px';
idTwo.style.textAlign = 'center';

/* TYPECLASS  */
typeClass.style.background = 'black';
typeClass.style.color = 'white';
typeClass.style.padding = '20px';
typeClass.style.textAlign = 'center';