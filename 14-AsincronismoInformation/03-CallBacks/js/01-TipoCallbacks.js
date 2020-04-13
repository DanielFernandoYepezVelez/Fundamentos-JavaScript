/* TIPOS DE CALLBACKS */
const paises = ['colombia', 'Argentina', 'Venezuela', 'Panama', 'Ecuador'];
const ciudades = ['Londres', 'New York', 'Madrid', 'Viena', 'Medellin'];

/* Inline CallBack, por que la funcion no tiene nombre, es decir, es anonima. */
paises.forEach(function(pais) {
    console.log(pais);
});

console.log('----------------------------------');

/* Callback Con Funcion Definida, por que la funcion si tiene nombre */
function Callback(ciudad) {
    console.log(ciudad);
}
ciudades.forEach(Callback);