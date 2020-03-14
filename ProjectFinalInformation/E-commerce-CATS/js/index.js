/* Mejorando el codigo con javaScript */
let articulos = [{
        id: 'articulo-001',
        name: 'gato hot dog',
        price: 50,
        cover: 'gato-hot-dog.png'
    },
    {
        id: 'articulo-002',
        name: 'gato hamburguesa',
        price: 40,
        cover: 'gato-hamburguesa.png'
    },
    {
        id: 'articulo-003',
        name: 'gato taco',
        price: 40,
        cover: 'gato-taco.png'
    }
];

function crearElemento(tipo, contenido, clase, archivoImagen) {
    let elemento = window.document.createElement(tipo);

    if (contenido !== null) {
        elemento.innerHTML = contenido;
    }

    if (clase !== null) {
        elemento.classList.add(clase);
    }

    if (archivoImagen !== null) {
        elemento.setAttribute('src', 'assets/' + archivoImagen);
    }

    return elemento;
}

function dibujarArticulo(articulo) {
    let itemCard = crearElemento('div', null, 'item-card', null);

    /* Agregar portada del articulo en el item-card */
    itemCard.appendChild(crearElemento('img', null, 'item-cover', articulo.cover));

    /* Agregar titulo del articulo en el item-card */
    itemCard.appendChild(crearElemento('h2', articulo.name, null, null));

    let filaPrecio = crearElemento('div', null, 'row', null);

    /* Agregar Etiqueta precio en la fila */
    filaPrecio.appendChild(crearElemento('span', 'price', 'subtitle', null));

    /* Agregar Simbolo Dolar en la fila de precio */
    filaPrecio.appendChild(crearElemento('span', '$', 'price', null));

    /* Agregar precio en la fila de precio */
    filaPrecio.appendChild(crearElemento('span', articulo.price, 'price', null));

    /* Agregar fila de precio en el item-card */
    itemCard.appendChild(filaPrecio);

    let filaContador = crearElemento('div', null, 'row', null);

    /* Agregar etiqueta cantidad en la fila de contador */
    filaContador.appendChild(crearElemento('span', 'Quantity', 'subtitle', null));

    let contador = crearElemento('div', null, 'count', null);

    let numeroContador = crearElemento('span', 1, 'quantity', null);

    /* Agregar span en el contador */
    contador.appendChild(numeroContador);

    let botonMenos = crearElemento('img', null, 'botton-less', 'download (1).svg');
    botonMenos.addEventListener('click', disminuir.bind(null, numeroContador));
    /* Agregar boton menos en el contador */
    contador.appendChild(botonMenos);

    let botonMas = crearElemento('img', null, 'botton-add', 'download.svg');
    botonMas.addEventListener('click', incrementar.bind(null, numeroContador));
    /* Agregar boton mas en el contador */
    contador.appendChild(botonMas);


    filaContador.appendChild(contador);

    /* Agregar fila de contador en el appenchild */
    itemCard.appendChild(filaContador);

    let botonAgregar = crearElemento('div', 'Add', 'boton-agregar', null);
    botonAgregar.addEventListener('click', agregar.bind(null, articulo, numeroContador));

    /* Agregar Boton "Agregar" en el item Card */
    itemCard.appendChild(botonAgregar);

    let contenedorArticulos = window.document.getElementById('contenedor-articulos');
    contenedorArticulos.appendChild(itemCard);
}

for (let i = 0; i < articulos.length; i++) {
    dibujarArticulo(articulos[i]);
}
/* ----------------------------------------------------------------------------------------------- */

/* Condiciones Para un envio GRATIS! 
Compra de mas de 100 dolares
10% descuento con ambos articulos con un valor
de mas de 500 dolares*/
/*---------------------------------------------------  */

/* ARTICULO 1 */
/* Referencia Botones */
// const botonMas1 = window.document.getElementById('boton-mas1');
// const botonMenos1 = window.document.getElementById('boton-menos1');
// const botonAgregar1 = window.document.getElementById('boton-agregar1');

/* ARTICLE 2 */
/* Referencia Botones */
// const botonMas2 = window.document.getElementById('boton-mas2');
// const botonMenos2 = window.document.getElementById('boton-menos2');
// const botonAgregar2 = window.document.getElementById('boton-agregar2');

/* ARTICLE 1 */
/* Referencia Etiquetas */
// const etiquetaCantidad1 = window.document.getElementById('etiqueta-cantidad1');
// const etiquetaPrecio1 = window.document.getElementById('etiqueta-precio1');

/* ARTICLE 2 */
/* Referencia Etiquetas */
// const etiquetaCantidad2 = window.document.getElementById('etiqueta-cantidad2');
// const etiquetaPrecio2 = window.document.getElementById('etiqueta-precio2');

/* Referencias Genericas DE La Tarjeta Total A Pagar */
const contenedorEtiquetas = window.document.getElementById('contenedor-etiquetas');
const etiquetaSubtotal = window.document.getElementById('etiqueta-subtotal');
const etiquetaTotal = window.document.getElementById('etiqueta-total');
const etiquetaEnvio = window.document.getElementById('etiqueta-envio');
const etiquetaDescuento = window.document.getElementById('etiqueta-descuento');
// let agregadoArticulo1 = false;
// let agregadoArticulo2 = false;
let descuento = 0;

let valorEnvio = window.document.getElementById('valor-envio');
let valorDescuento = window.document.getElementById('valor-descuento');

/* Variable Genericas De La Tarjeta Total A Pagar */
let precioSubtotal = 0;
// valorEnvio = 5;

/* ARTICLE 1 */
/* Eventos 
RECORDAR LOS EVENTOS SON EL PUENTE
QUE CONECTAN LOS ELEMENTOS Y LAS
FUNCIONES QUE EJECUTAN LA INTERACTIVIDAD
DEL SOFTWARE */
// botonMas1.addEventListener('click', incrementar);
// botonMenos1.addEventListener('click', disminuir);
// botonAgregar1.addEventListener('click', agregar);

/* ARTICLE 2 */
// botonMas2.addEventListener('click', incrementar2);
// botonMenos2.addEventListener('click', disminuir2);
// botonAgregar2.addEventListener('click', agregar2);

/* ARTICLE 1 */
/* Funciones */
/* Con innerHTML obtengo el valor de la etiqueta */
// 

function incrementar(referenciaContador) {
    // console.log(etiquetaCantidad.innerHTML) ME MUESTRA QUE TIENE EL INNERHTML
    referenciaContador.innerHTML++;
}

function disminuir(referenciaContador) {
    if (referenciaContador.innerHTML > 0) {
        referenciaContador.innerHTML--;
    } else {
        referenciaContador.innerHTML = 0;
    }
}

/* Refactorizar el codigo
Simplificar lineas de codigo exactamente
iguales en diferentes segmentos de
programa.Esta habilidad no es cambiar
funcionalidad, es reducir el codigo
redundante */
// function aplicarDescuento() {
// if (precioSubtotal > 100) {
//     etiquetaEnvio.style.color = '#4382FF';
//     valorEnvio.innerHTML = 0;
// }

// if (agregadoArticulo1 && agregadoArticulo2 && precioSubtotal > 500) {
//     etiquetaDescuento.style.color = '#4382FF';
//     descuento = precioSubtotal * 0.1;
//     valorDescuento.innerHTML = descuento;
// }
// etiquetaTotal.innerHTML = precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
// }

function agregar(articulo, referenciaContador) {

    // Tipo De Articulo marcado como  Agregado
    articulo.agregado = true;

    // agregadoArticulo1 = true;
    // console.log(Number(etiquetaPrecio1.innerHTML) * Number(etiquetaCantidad.innerHTML));
    precioSubtotal += Number(articulo.price) * Number(referenciaContador.innerHTML);
    etiquetaSubtotal.innerHTML = precioSubtotal;

    if (precioSubtotal > 100) {
        etiquetaEnvio.style.color = '#4382FF';
        valorEnvio.innerHTML = 0;
    }
    // aplicarDescuento();

    agregarEtiquetaArticulo(articulo, referenciaContador);

    let aplicarDescuento = corroborarDescuento();

    if (aplicarDescuento && precioSubtotal > 500) {
        etiquetaDescuento.style.color = '#4382FF';
        descuento = precioSubtotal * 0.1;
        valorDescuento.innerHTML = descuento;
    }

    etiquetaTotal.innerHTML = precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
    referenciaContador.innerHTML = 1;
}

/* ARTICLE 2 */
// function incrementar2() {
//     // console.log(etiquetaCantidad.innerHTML) ME MUESTRA QUE TIENE EL INNERHTML
//     etiquetaCantidad2.innerHTML++;
// }

// function disminuir2() {
//     if (etiquetaCantidad2.innerHTML > 0) {
//         etiquetaCantidad2.innerHTML--;
//     } else
//         etiquetaCantidad2.innerHTML = 0;
// }

// function agregar2() {
//     agregadoArticulo2 = true;
//     precioSubtotal += Number(etiquetaPrecio2.innerHTML) * Number(etiquetaCantidad2.innerHTML);
//     etiquetaSubtotal.innerHTML = precioSubtotal;

//     aplicarDescuento();
//     agregarEtiquetaArticulo2();
// }

// let referenciaElementoGlobal = null;
// let cantidadAcumulada = 0;

/* Etiquetas De Articulo */
function agregarEtiquetaArticulo(articulo, referenciaContador) {

    let fila = crearElemento('div', null, 'row', null);

    if (articulo.cantidadAcumulada == null) {
        articulo.cantidadAcumulada = Number(referenciaContador.innerHTML);
    } else {
        articulo.cantidadAcumulada += Number(referenciaContador.innerHTML);
    }

    let texto = crearElemento('span', articulo.name + ' X ' + articulo.cantidadAcumulada, 'subtitle', null);

    fila.appendChild(texto);

    if (articulo.referenciaArticulo == null) {
        contenedorEtiquetas.appendChild(fila);
    } else {
        contenedorEtiquetas.replaceChild(fila, articulo.referenciaArticulo);
    }

    articulo.referenciaArticulo = fila;

    // let row = window.document.createElement('div');
    // row.classList.add('row');

    // let text = window.document.createElement('span');
    // text.classList.add('subtitle');
    // cantidadAcumulada += Number(etiquetaCantidad1.innerHTML);
    // text.innerHTML = 'CAT HOT DOG ' + cantidadAcumulada;

    // row.appendChild(text);

    // if (referenciaElementoGlobal == null) {
    //     contenedorEtiquetas.appendChild(row);
    // } else {
    //     contenedorEtiquetas.replaceChild(row, referenciaElementoGlobal);
    // }
    // referenciaElementoGlobal = row;
}

// let referenciaElementoGlobal2 = null;
// let cantidadAcumulada2 = 0;

/* Etiquetas De Articulo */
// function agregarEtiquetaArticulo2() {
//     let row = window.document.createElement('div');
//     row.classList.add('row');

//     let text = window.document.createElement('span');
//     text.classList.add('subtitle');
//     cantidadAcumulada2 += Number(etiquetaCantidad2.innerHTML);
//     text.innerHTML = 'CAT HAMBURGUER ' + cantidadAcumulada2;

//     row.appendChild(text);

//     if (referenciaElementoGlobal2 == null) {
//         contenedorEtiquetas.appendChild(row);
//     } else {
//         contenedorEtiquetas.replaceChild(row, referenciaElementoGlobal2);
//     }
//     referenciaElementoGlobal2 = row;
// }

function corroborarDescuento() {
    let cantidadTipoArticulos = 0;

    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].agregado) {
            cantidadTipoArticulos++;
        }
    }

    if (cantidadTipoArticulos >= 2) {
        return true;
    } else {
        return false;
    }
}