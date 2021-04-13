/* Aqui Estamos Creando Desde Cero, Nuestro Propio Iterador */
/* Esta Es Una Función Que Retorna Otra Función */
function crearIterador(carrito) {
    let i = 0;

    return {
        /* Esta Es Una Función Que Es Retornada Por Otra Función, Pero
           A Su Vez, Esta Función Retorna Un Objeto Con Dos Propiedades */
        siguiente: () => {
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());