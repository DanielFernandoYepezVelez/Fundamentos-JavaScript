'Use strict';

/* Tomo el id como referencia de objeto
desde html a JavaScript, Para Utilizar
Y modificar Desde JavaScript */
let gretting = window.document.getElementById('gretting');
console.log(gretting);
console.log(typeof gretting);
console.log('---------------------------------');

gretting.style.color = 'blue';
gretting.style.margin = '10px';
gretting.style.border = 'solid red 2px';
gretting.innerHTML = 'Change Content';
console.log('Color, margin, border, innerHTML Text');
console.log('---------------------------------');

/* Tomo la class como referencia de objeto
desde html a JavaScript, Para Utilizar
Y modificar Desde JavaScript */
const subtitle = window.document.getElementsByClassName('subtitle');
console.log(subtitle);
console.log(subtitle[0]);
console.log(subtitle[1]);
console.log('---------------------------------');

/* Tomo la tag o etiqueta como referencia de
objeto desde html a JavaScript, Para Utilizar
Y modificar Desde JavaScript */
const tagh2 = window.document.getElementsByTagName('h2');
console.log(tagh2);
console.log(tagh2[0]);
console.log('---------------------------------');