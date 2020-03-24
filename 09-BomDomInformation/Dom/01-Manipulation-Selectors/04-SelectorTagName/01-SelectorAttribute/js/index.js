const primeraEtiqueta = document.getElementsByTagName('h1');
let convertirArray = Array.from(primeraEtiqueta);

console.log(primeraEtiqueta);
console.log(convertirArray);

convertirArray.forEach(function(primeraEtiqueta) {
    primeraEtiqueta.style.color = 'white';
    primeraEtiqueta.style.backgroundColor = 'black';
    primeraEtiqueta.style.padding = '20px';
    primeraEtiqueta.style.fontSize = '35px';
    primeraEtiqueta.style.textAlign = 'center';
    primeraEtiqueta.textContent = 'Reescribiendo la etiqueta Uno';
    primeraEtiqueta.innerText = 'Reescribiendo la etiqueta Uno';
    primeraEtiqueta.innerHTML = 'Reescribiendo la etiqueta Uno';
});

/* Con el forEach me ahorro todas las
lineas comentandas siguientes */
// primeraEtiqueta[0].style.color = 'white';
// primeraEtiqueta[0].style.backgroundColor = 'black';
// primeraEtiqueta[0].style.padding = '20px';
// primeraEtiqueta[0].style.fontSize = '35px';
// primeraEtiqueta[0].style.textAlign = 'center';
// primeraEtiqueta[0].textContent = 'Reescribiendo la etiqueta Uno';
// primeraEtiqueta[0].innerText = 'Reescribiendo la etiqueta Uno';
// primeraEtiqueta[0].innerHTML = 'Reescribiendo la etiqueta Uno';

// primeraEtiqueta[1].style.color = 'white';
// primeraEtiqueta[1].style.backgroundColor = 'black';
// primeraEtiqueta[1].style.padding = '20px';
// primeraEtiqueta[1].style.fontSize = '35px';
// primeraEtiqueta[1].style.textAlign = 'center';
// primeraEtiqueta[1].textContent = 'Reescribiendo la etiqueta Uno';
// primeraEtiqueta[1].innerText = 'Reescribiendo la etiqueta Uno';
// primeraEtiqueta[1].innerHTML = 'Reescribiendo la etiqueta Uno';
console.log('-------------------------');

/* Aqui no Utilice  un ciclo */
const segundaEtiqueta = document.getElementsByTagName('h2');
console.log(segundaEtiqueta);

segundaEtiqueta[0].style.color = 'aqua';
segundaEtiqueta[0].style.backgroundColor = 'black';
segundaEtiqueta[0].style.padding = '20px';
segundaEtiqueta[0].style.fontSize = '35px';
segundaEtiqueta[0].style.textAlign = 'center';
segundaEtiqueta[0].textContent = 'Reescribiendo la etiqueta Dos';
segundaEtiqueta[0].innerText = 'Reescribiendo la etiqueta Dos';
segundaEtiqueta[0].innerHTML = 'Reescribiendo la etiqueta Dos';

segundaEtiqueta[1].style.color = 'aqua';
segundaEtiqueta[1].style.backgroundColor = 'black';
segundaEtiqueta[1].style.padding = '20px';
segundaEtiqueta[1].style.fontSize = '35px';
segundaEtiqueta[1].style.textAlign = 'center';
segundaEtiqueta[1].textContent = 'Reescribiendo la etiqueta Dos';
segundaEtiqueta[1].innerText = 'Reescribiendo la etiqueta Dos';
segundaEtiqueta[1].innerHTML = 'Reescribiendo la etiqueta Dos';
console.log('-------------------------');

const terceraEtiqueta = document.getElementsByTagName('h3');
console.log(terceraEtiqueta);

terceraEtiqueta[0].style.color = 'red';
terceraEtiqueta[0].style.backgroundColor = 'black';
terceraEtiqueta[0].style.padding = '20px';
terceraEtiqueta[0].style.fontSize = '35px';
terceraEtiqueta[0].style.textAlign = 'center';
terceraEtiqueta[0].textContent = 'Reescribiendo la etiqueta Tres';
terceraEtiqueta[0].innerText = 'Reescribiendo la etiqueta Tres';
terceraEtiqueta[0].innerHTML = 'Reescribiendo la etiqueta Tres';

terceraEtiqueta[1].style.color = 'red';
terceraEtiqueta[1].style.backgroundColor = 'black';
terceraEtiqueta[1].style.padding = '20px';
terceraEtiqueta[1].style.fontSize = '35px';
terceraEtiqueta[1].style.textAlign = 'center';
terceraEtiqueta[1].textContent = 'Reescribiendo la etiqueta Tres';
terceraEtiqueta[1].innerText = 'Reescribiendo la etiqueta Tres';
terceraEtiqueta[1].innerHTML = 'Reescribiendo la etiqueta Tres';
console.log('-------------------------');