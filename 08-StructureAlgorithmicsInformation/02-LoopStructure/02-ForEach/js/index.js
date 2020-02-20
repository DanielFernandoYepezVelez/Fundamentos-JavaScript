const pendientes = ['Tareas', 'Comer', 'Proyecto', 'JS'];

/* Recorriendo un array con un for each */
pendientes.forEach(function(pendiente, index) {
    console.log(index, pendiente);
});

pendientes.forEach(element => {
    console.log(element);
});
console.log('----------------------------------');