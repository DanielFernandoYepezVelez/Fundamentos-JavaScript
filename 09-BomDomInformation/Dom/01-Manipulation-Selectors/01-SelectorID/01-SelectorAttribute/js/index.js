/* OBTENER */
/* Obtener solo nombre del ID */
const gretting = document.getElementById('gretting');
const id = gretting.id;
console.log(id);
console.log('----------------------------');

/* Obtener solo nombre de la CLASE */
const subtitle = document.getElementById('subtitle');
const clase = subtitle.className;
console.log(clase);
console.log('----------------------------');

/* Obtener solo CONTENIDO del NODO o ELEMENTO */
const content = document.getElementById('content');
const getcontent1 = content.textContent;
const getcontent2 = content.innerText;
const getcontent3 = content.innerHTML;

console.log(getcontent1);
console.log(getcontent2);
console.log(getcontent3);
console.log('----------------------------');

/* MODIFICAR */
/* Modificar CONTENIDO del NODO o ELEMENTO */
const textModify = document.getElementById('textModify');
const setText1 = textModify.textContent = 'The New Paragraphs'
const setText2 = textModify.innerText = 'The New Paragraphs'
const setText3 = textModify.innerHTML = 'The New Paragraphs'

console.log(setText1);
console.log(setText2);
console.log(setText3);
console.log('----------------------------');

/* Modificar CSS desde JavaScript */
/* GRETTING */
gretting.style.background = 'black';
gretting.style.color = 'white';
gretting.style.padding = '20px';
gretting.style.textAlign = 'center';
// gretting.textContent = 'New Hello World!';
// gretting.innerText = 'New Hello World!';
gretting.innerHTML = 'New Hello World!';

/* SUBTITLE */
subtitle.style.background = 'black';
subtitle.style.color = 'white';
subtitle.style.padding = '20px';
subtitle.style.textAlign = 'center';
// subtitle.textContent = 'New Hello Friends!';
// subtitle.innerText = 'New Hello Friends!';
subtitle.innerHTML = 'New Hello Friends!';

/* CONTENT */
content.style.background = 'black';
content.style.color = 'white';
content.style.padding = '20px';
content.style.textAlign = 'center';
// content.textContent = 'New Hello Community';
// content.innerText = 'New Hello Community';
content.innerHTML = 'New Hello Community';

/* TEXT-MODIFY */
textModify.style.background = 'black';
textModify.style.color = 'white';
textModify.style.padding = '20px';
textModify.style.textAlign = 'center';
// textModify.textContent = 'New The Paragraphs';
// textModify.innerText = 'New The Paragraphs';
textModify.innerHTML = 'New The Paragraphs';