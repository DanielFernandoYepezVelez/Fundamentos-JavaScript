/* Scroll
Me sirve para agregar efectos o animaciones, cuando scroll vertical u horizontal
*/

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    /* El metodo getBoundingClientRect() muchos aspectos, entre
    los mas importante son sus coordenadas, alto, ancho, entre otros */
    console.log(ubicacion);

    if (ubicacion.top < 780) {
        /* AQUI PODEMOS AGREGAR UNA CLASE DE CSS CON ANIMACIONES Y TRANSICIONES */
        /* LO QUE NECESITO PARA EL PORTAFOLIO */
        console.log('Elemento YA!! esta visible');
    } else {
        console.log('Mas scroll vertical por favor');
    }
})