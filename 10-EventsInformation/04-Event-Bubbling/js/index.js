/* EVENT BUBBLING (Se conoce como una burbuja de eventos) */
/* Cuando seleccionas un elemento y automaticamente se seleccionan otros elementos con dicho elemento mencionado anteriormente. */

/* Aqui podemos ver que si damos click en el input se ejecuta todo
por que este es el que esta en la parte mas interna, entonces toma
desde el input hacia afuera, es decir toma el input, luego el texto
y por ultimo el boton y sigue asi sucesivamente, en conclusion, el event-
Bubbling lo que hace es tomar desde adentro hacia afuera con un solo click
es decir, con la ejecucion de un solo evento, se pueden ejecutar los demas
si estan o hacen parte de su recorrido.*/

const input = document.querySelector('.inputClassOne');
const text = document.querySelector('h1');
const button = document.querySelector('.buttonClassOne');

/* input.addEventListener('click', function() {
    console.log('Click En El Input');
});

text.addEventListener('click', function() {
    console.log('Click En El Texto');
});

button.addEventListener('click', function() {
    console.log('Click En El Boton');
}); */

/* AVECES ES NECESARIO DETENER EL EVENT-BUBBLING 
Con la siguiente funcion lo puedo hacer */
input.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('Click En El Input');
});

text.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('Click En El Texto');
});

button.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('Click En El Boton');
});