/* Los parentesis hacen que se llame asi misma
y de forma inmediata */
(function() {
    console.log('Creando un IIFE');
})();

/* y puedo pasarle parametros Al parentesis que hace que se ejecute a ella misma con su respectivo argumento(javascript)*/
(function(tecnologi) {
    console.log(`Aprendiendo ${tecnologi}`);
})('JavaScript');
console.log('--------------------------------');

/* FUNCIONES QUE SE CONOCEN COMO METODOS DE PROPIEDAD(METODOS NORMALES) */
/* Cuando una funcion esta dentro de un objeto */
const musica = {
    reproducir: function(id) {
        console.log(`play canción id ${id}`);
    },
    pausar: function() {
        console.log(`stop`);
    }
};

/* Actualizar objeto con funciones Desde fuera */
musica.delete = function(id) {
    console.log(`Eliminando canción con el id ${id}`);
};

musica.reproducir(20);
musica.pausar();
musica.delete(25);
console.log('--------------------------------');