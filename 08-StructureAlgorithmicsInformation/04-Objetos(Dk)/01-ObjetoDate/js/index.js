/* Fecha y hora actual */
const diaHoy = new Date();
console.log('Instancia Fecha Y Hora: ', diaHoy);
console.log('-------------------------------');

/* Obtener Hora y Fecha en especifico Año Mes, dia cualquiera */
/* Hoy */
const hoy = new Date();
console.log('Instancia Fecha Y Hora: ', hoy);

/* Ocho Dias Atras */
const ochoDiasAtras = new Date('2020-03-9');
console.log('Fecha 8 Dias Atras: ', ochoDiasAtras);
console.log('-------------------------------');

/* Obtener Mes(Inicia a contar desde el 0) */
const mes = diaHoy.getMonth();
console.log('Mes Del Año: ', mes);
console.log('-------------------------------');

/* Obtener dia del mes */
const diaFormaUno = diaHoy.getDate();
console.log('Dia Del Mes:', diaFormaUno);
console.log('-------------------------------');

/* Obtener el dia de la semana(Inicia desde el 1) */
const diaFormaDos = diaHoy.getDay();
console.log('Dia De La Semana:', diaFormaDos);
console.log('-------------------------------');

/* Obtener el año */
const año = diaHoy.getFullYear();
console.log('Año:', año);

/* MODIFICANDO EL VALOR DEL AÑO */
diaHoy.setFullYear(2016);
const añoModificado = diaHoy.getFullYear();
console.log('Año Modificado:', añoModificado);
console.log('-------------------------------');

/* Obtener Horas, Minutos, Segundos, Milisegundos */
const horas = diaHoy.getHours();
const minutos = diaHoy.getMinutes();
const segundos = diaHoy.getSeconds();
const milisegundos = diaHoy.getMilliseconds();
console.log(`horas:minutos:segundos:milisegundos`);
console.log(`${horas}:${minutos}:${segundos}:${milisegundos}`);

/* Buscar Info */
console.log(diaHoy.getTime());