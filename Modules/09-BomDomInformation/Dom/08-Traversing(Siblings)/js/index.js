const enlaces = document.querySelectorAll('.enlace');

/* Aqui voy a aplicar un ejemplo hacia ATRAS */
console.log(enlaces);
console.log('----------------------------');

/* Aqui estoy en la posiciòn 3 de mi array */
console.log(enlaces[3])
console.log('----------------------------');

/* Aqui estoy en la posiciòn 3 de mi array
pero voy al espacio de atras que es en blanco. */
console.log(enlaces[3].previousSibling)
console.log('----------------------------');

/* Aqui estoy en la posiciòn numero 2 de mi
array y con esta instrucciòn evito el espacio
en blanco */
/* Estan al mismo nivel, primo-hermano */
console.log(enlaces[3].previousElementSibling);
console.log('----------------------------');

/* Aqui llego al enlace en la posiciòn 1
por que voy dos elementos hacia atras */
console.log(enlaces[3].previousElementSibling.previousElementSibling);
console.log('----------------------------');

/* ADELANTE */
/* Aqui obtengo el array completo */
console.log(enlaces);
console.log('----------------------------');

/* Aqui estoy en la posiciòn CERO(0) */
console.log(enlaces[0])
console.log('----------------------------');

/* Aqui obtengo el espacio en blanco
que es la distancia entre los nodos 
o elementos o etiquetas */
console.log(enlaces[0].nextSibling);
console.log('----------------------------');

/* Aqui realmente obtengo la posiciòn
numero UNO(1), es decir, el nodo siguiente */
/* Que estan al mismo nivel, primo-hermano */
console.log(enlaces[0].nextElementSibling);
console.log('----------------------------');

/* Aqui pasamos dos elementos de forma
continua y llegamos en la posiciòn DOS(2) */
console.log(enlaces[0].nextElementSibling.nextElementSibling);
console.log('----------------------------');

/* PUEDO COMBINAR TODAS LAS FORMAS
EXISTENTES DE TRAVERSING, SIMPRE Y CUANDO
TENGAMOS ELEMENTOS, ETIQUETAS O NODOS EN EL DOM */
/* Puede Combinar los avances de los nodos
tanto hacia arriba y hacia abajo */
console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children);
console.log('----------------------------');

console.log(enlaces[0].nextElementSibling.nextElementSibling.children);
console.log('----------------------------');