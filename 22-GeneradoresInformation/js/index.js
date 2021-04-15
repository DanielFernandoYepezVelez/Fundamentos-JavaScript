/* Generador Con Elementos Estaticos */
function* crearGenerador() {
    yield 1;
    yield 'Daniel Fernando';
    yield 3 + 3;
    yield true;
}

/* El Generador Queda Suspendido O Dormido */
const iterador = crearGenerador();
console.log(iterador);

/* Para Que El Generador Deje De Estar Suspendido
Debemos Utilizar La Función next() */
console.log(iterador.next());

/* El Generador Vuelve A Su Estado De Suspended */
console.log(iterador);

/* Para Acceder A Los Valores Del Generador, Hacemos Lo Siguiente */
console.log(iterador.next().value);

/* Cada Vez Que Se Aplique El Método .next() Se Va Ha Ejecutar Un Yield,
Por Tal Motivo, Se Va A Mostrar Por Pantalla El yield (3 + 3), Por Que
El Método .next() Se Ha Invocado Dos Veces Con Aterioridad */
console.log(iterador.next().value);
console.log(iterador.next().value);

console.log(iterador.next());
console.log('Este Es El Done, El Ultimo =>', iterador.next().done);

/* Cuando Se Ejecuta Por Completo El Generador, Lo Encontramos Como closed(Cerrado) */
console.log(iterador);

/* -------------------------- */
console.log('---------------\n');

/* Generador Con Elementos Dinámicos */
function* generadorCarrito(carrito) {

    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }

}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iteradorTwo = generadorCarrito(carrito);

console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo);