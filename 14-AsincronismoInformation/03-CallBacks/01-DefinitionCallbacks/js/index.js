setTimeout(function() {
    console.log('Esta es la definicion de un callback');
}, 1000);

/* Arrow Function */
setTimeout(() => {
    console.log('Esta es la definicion de un callback, con un Arrow Function');
}, 2000);

setInterval(function() {
    console.log('Esta es la definicion de un callback, con intervalo constante');
}, 4000);

/* Arrow Function */
setInterval(() => {
    console.log('Esta es la definicion de un callback, con intervalo constante y arrow function');
}, 5000);