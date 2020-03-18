/* Iteradores Incluidos En JavaScript
PARA RECORRER ARRAYS, SETS, MAPS SOLO PARA ESTOS */
const ciudades = ['Londres', 'New York', 'Madrid'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'Daniel');
datos.set('profesion', 'Desarrollador Web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);
console.log('-------------------------------');

/* Entries Iterador (ENTREGA LLAVE Y VALOR) */
/* Entries para las ciudades */
for (let entrada of ciudades.entries()) {
    console.log(entrada);
};

/* Entries para las ordenes */
for (let entrada of ordenes.entries()) {
    console.log(entrada);
}

/* Entries para los datos */
for (let entrada of datos.entries()) {
    console.log(entrada);
}
console.log('--------------------------------');

/* Values Iterador (SOLO ENTREGA LOS VALORES) */
/* Values para las ciudades en los arreglos el value
es por defecto asi que no es necesario poner Values(),
lo voy a poner de todos modos. */
for (let value of ciudades.values()) {
    console.log(value);
};

/* Values para las ordenes */
for (let value of ordenes.values()) {
    console.log(value);
}

/* Values para los datos */
for (let value of datos.values()) {
    console.log(value);
}
console.log('--------------------------------');

/* Keys Iterador (ENTREGA SOLO LLAVE) */
/* Keys para las ciudades */
for (let key of ciudades.keys()) {
    console.log(key);
};

/* Keys para las ordenes */
for (let key of ordenes.keys()) {
    console.log(key);
}

/* Keys para los datos */
for (let key of datos.keys()) {
    console.log(key);
}
console.log('--------------------------------');

/* Default Iterador (ENTREGA LOS VALORES POR DEFECTO QUE EXISTEN)*/
for (let defaul of ciudades) {
    console.log(defaul);
};

/* Values para las ordenes */
for (let defaul of ordenes) {
    console.log(defaul);
}

/* Values para los datos */
for (let defaul of datos) {
    console.log(defaul);
}
console.log('--------------------------------');

/* ARRAY PARA STRING O CADENA DE CARACTERES */
const mensaje = 'Learn To JavaScript';

/* FORMA VIEJA */
for (let index = 0; index < mensaje.length; index++) {
    const element = mensaje[index];
    console.log(element);
};
console.log('---------');

/* FORMA ACTUAL */
for (const letra of mensaje) {
    console.log(letra);
}
console.log('--------------------------------');

/* Iterador PARA EL HTML */
const enlaces = window.document.getElementsByTagName('a');

for (const enlace of enlaces) {
    console.log(enlace);
}
console.log('--------------------------------');