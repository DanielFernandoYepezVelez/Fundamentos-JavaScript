/* Se Puede Ver La Documentación Para Más Información */
console.log('');
console.log('===== MOMENT JS =====');

/* Idioma */
console.log(moment.locale('es'));

/* Formato Fechas Amigables */
console.log(moment().format());
console.log(moment().format('MMMM'));
console.log(moment().format('MMMM D'));
console.log(moment().format('MMMM D YYYY'));
console.log(moment().format('MMMM D YYYY h'));
console.log(moment().format('MMMM D YYYY h:mm'));
console.log(moment().format('MMMM D YYYY h:mm:ss'));
console.log(moment().format('MMMM D YYYY h:mm:ss a'));
console.log(moment().format('LLLL'));

/* Operaciones */
/* Ejemplo Para La Expiración De Algun Cupón O Promoción */
console.log(moment().add(3, 'days').calendar());