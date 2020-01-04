/* Condiciones Para un envio GRATIS! 
Compra de mas de 100 dolares
10% descuento con ambos articulos con un valor
de mas de 500 dolares*/
/*---------------------------------------------------  */

/* ARTICULO 1 */
/* Referencia Botones */
const botonMas1 = window.document.getElementById('boton-mas1');
const botonMenos1 = window.document.getElementById('boton-menos1');
const botonAgregar1 = window.document.getElementById('boton-agregar1');

/* ARTICLE 2 */
/* Referencia Botones */
const botonMas2 = window.document.getElementById('boton-mas2');
const botonMenos2 = window.document.getElementById('boton-menos2');
const botonAgregar2 = window.document.getElementById('boton-agregar2');

/* ARTICLE 1 */
/* Referencia Etiquetas */
const etiquetaCantidad1 = window.document.getElementById('etiqueta-cantidad1');
const etiquetaPrecio1 = window.document.getElementById('etiqueta-precio1');

/* ARTICLE 2 */
/* Referencia Etiquetas */
const etiquetaCantidad2 = window.document.getElementById('etiqueta-cantidad2');
const etiquetaPrecio2 = window.document.getElementById('etiqueta-precio2');

/* Referencias Genericas DE La Tarjeta Total A Pagar */
const contenedorEtiquetas = window.document.getElementById('contenedor-etiquetas');
const etiquetaSubtotal = window.document.getElementById('etiqueta-subtotal');
const etiquetaTotal = window.document.getElementById('etiqueta-total');
const etiquetaEnvio = window.document.getElementById('etiqueta-envio');
const etiquetaDescuento = window.document.getElementById('etiqueta-descuento');
let agregadoArticulo1 = false;
let agregadoArticulo2 = false;
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
botonMas1.addEventListener('click', incrementar);
botonMenos1.addEventListener('click', disminuir);
botonAgregar1.addEventListener('click', agregar);

/* ARTICLE 2 */
botonMas2.addEventListener('click', incrementar2);
botonMenos2.addEventListener('click', disminuir2);
botonAgregar2.addEventListener('click', agregar2);

/* ARTICLE 1 */
/* Funciones */
/* Con innerHTML obtengo el valor de la etiqueta */
function incrementar() {
    // console.log(etiquetaCantidad.innerHTML) ME MUESTRA QUE TIENE EL INNERHTML
    etiquetaCantidad1.innerHTML++;
}

function disminuir() {
    if (etiquetaCantidad1.innerHTML > 0) {
        etiquetaCantidad1.innerHTML--;
    } else {
        etiquetaCantidad1.innerHTML = 0;
    }
}

/* Refactorizar el codigo
Simplificar lineas de codigo exactamente
iguales en diferentes segmentos de
programa.Esta habilidad no es cambiar
funcionalidad, es reducir el codigo
redundante */
function aplicarDescuento() {
    if (precioSubtotal > 100) {
        etiquetaEnvio.style.color = '#4382FF';
        valorEnvio.innerHTML = 0;
    }

    if (agregadoArticulo1 && agregadoArticulo2 && precioSubtotal > 500) {
        etiquetaDescuento.style.color = '#4382FF';
        descuento = precioSubtotal * 0.1;
        valorDescuento.innerHTML = descuento;
    }
    etiquetaTotal.innerHTML = precioSubtotal + Number(valorEnvio.innerHTML) - descuento;
}

function agregar() {
    agregadoArticulo1 = true;
    // console.log(Number(etiquetaPrecio1.innerHTML) * Number(etiquetaCantidad.innerHTML));
    precioSubtotal += Number(etiquetaPrecio1.innerHTML) * Number(etiquetaCantidad1.innerHTML);
    etiquetaSubtotal.innerHTML = precioSubtotal;

    aplicarDescuento();
    agregarEtiquetaArticulo();
}

/* ARTICLE 2 */
function incrementar2() {
    // console.log(etiquetaCantidad.innerHTML) ME MUESTRA QUE TIENE EL INNERHTML
    etiquetaCantidad2.innerHTML++;
}

function disminuir2() {
    if (etiquetaCantidad2.innerHTML > 0) {
        etiquetaCantidad2.innerHTML--;
    } else
        etiquetaCantidad2.innerHTML = 0;
}

function agregar2() {
    agregadoArticulo2 = true;
    precioSubtotal += Number(etiquetaPrecio2.innerHTML) * Number(etiquetaCantidad2.innerHTML);
    etiquetaSubtotal.innerHTML = precioSubtotal;

    aplicarDescuento();
    agregarEtiquetaArticulo2();
}

let referenciaElementoGlobal = null;
let cantidadAcumulada = 0;

/* Etiquetas De Articulo */
function agregarEtiquetaArticulo() {
    let row = window.document.createElement('div');
    row.classList.add('row');

    let text = window.document.createElement('span');
    text.classList.add('subtitle');
    cantidadAcumulada += Number(etiquetaCantidad1.innerHTML);
    text.innerHTML = 'CAT HOT DOG ' + cantidadAcumulada;

    row.appendChild(text);

    if (referenciaElementoGlobal == null) {
        contenedorEtiquetas.appendChild(row);
    } else {
        contenedorEtiquetas.replaceChild(row, referenciaElementoGlobal);
    }
    referenciaElementoGlobal = row;
}

let referenciaElementoGlobal2 = null;
let cantidadAcumulada2 = 0;

/* Etiquetas De Articulo */
function agregarEtiquetaArticulo2() {
    let row = window.document.createElement('div');
    row.classList.add('row');

    let text = window.document.createElement('span');
    text.classList.add('subtitle');
    cantidadAcumulada2 += Number(etiquetaCantidad2.innerHTML);
    text.innerHTML = 'CAT HAMBURGUER ' + cantidadAcumulada2;

    row.appendChild(text);

    if (referenciaElementoGlobal2 == null) {
        contenedorEtiquetas.appendChild(row);
    } else {
        contenedorEtiquetas.replaceChild(row, referenciaElementoGlobal2);
    }
    referenciaElementoGlobal2 = row;
}