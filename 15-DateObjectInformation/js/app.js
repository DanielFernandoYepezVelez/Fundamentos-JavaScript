const fechaActual = new Date();
console.log('Fecha Actual =>', fechaActual);
console.log(`---------------------------\n`);

/* Averiguar Una Dia En Especifico De Una Fecha En Especifica */
let fechaAveriguar = new Date('1-22-1980');
console.log('Fecha Por Averiguar =>', fechaAveriguar);

fechaAveriguar = new Date('January 22 1980');
console.log('Fecha Por Averiguar =>', fechaAveriguar);
console.log(`---------------------------\n`);

/* Existen Una Infinida De Métodos Para Fechas,
Solo se debe instanciar el objeto(Clase) e invocar 
el método que se necesita */
const fechaYear = fechaActual.getFullYear();
console.log('Año Actual =>', fechaYear);
console.log(`---------------------------\n`);

/* Strings De Fechas Mas Amigables. La Convierte
En Un Formato Del Pais De Ubicación */
const soloFecha = fechaActual.toLocaleDateString();
console.log('Solo Fecha STRING =>', soloFecha);
console.log(`---------------------------\n`);

const fechaYHoRa = fechaActual.toLocaleString();
console.log('Fecha Y Hora STRING =>', fechaYHoRa);
console.log(`---------------------------\n`);

const soloHora = fechaActual.toLocaleTimeString();
console.log('Solo Hora STRING =>', soloHora);
console.log(`---------------------------\n`);

/* Me Trae El Tiempo en milisegundos que ha pasado desde
el 70 hasta la fecha actual, por ende siempre
va hacer un valor diferente como resultado. 
Y por ultimo este metodo no es necesario INSTANCIARLO */
const fechaAhora = Date.now();
console.log('Fecha Milisegundos =>', fechaAhora);
console.log(`---------------------------\n`);