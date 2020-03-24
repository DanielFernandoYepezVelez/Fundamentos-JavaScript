const primeraClase = document.getElementsByClassName('primeraClase');

/* Se convierte Para Poder Utilizar todos 
los metodos de un array Normal */
const convertirArray = Array.from(primeraClase);
console.log(primeraClase);
console.log(convertirArray);

convertirArray.forEach(function(primeraClase) {
    primeraClase.style.color = 'blue';
    primeraClase.style.backgroundColor = 'black';
    primeraClase.style.padding = '20px';
    primeraClase.style.textAlign = 'center';
    primeraClase.style.fontSize = '35px';
    primeraClase.textContent = 'Reescribiendo Class Uno';
    primeraClase.innerText = 'Reescribiendo Class Uno';
    primeraClase.innerHTML = 'Reescribiendo Class Uno';

});

/* Con el iterador me ahorro todas estas lineas de codigo */
// primeraClase[0].style.color = 'blue';
// primeraClase[0].style.backgroundColor = 'black';
// primeraClase[0].style.padding = '20px';
// primeraClase[0].style.textAlign = 'center';
// primeraClase[0].style.fontSize = '35px';
// primeraClase[0].textContent = 'Reescribiendo Class Uno';
// primeraClase[0].innerText = 'Reescribiendo Class Uno';
// primeraClase[0].innerHTML = 'Reescribiendo Class Uno';

// primeraClase[1].style.color = 'aqua';
// primeraClase[1].style.backgroundColor = 'black';
// primeraClase[1].style.padding = '20px';
// primeraClase[1].style.textAlign = 'center';
// primeraClase[1].style.fontSize = '35px';
// primeraClase[1].textContent = 'Reescribiendo Class Uno';
// primeraClase[1].innerText = 'Reescribiendo Class Uno';
// primeraClase[1].innerHTML = 'Reescribiendo Class Uno';
console.log('-----------------');

/* No Utilice el iterador Lo hice de forma Manual */
const segundaClase = document.getElementsByClassName('pruebaClaseUno');
console.log(segundaClase);

segundaClase[0].style.color = 'red';
segundaClase[0].style.backgroundColor = 'black';
segundaClase[0].style.padding = '20px';
segundaClase[0].style.fontSize = '35px';
segundaClase[0].style.textAlign = 'center';
segundaClase[0].textContent = 'Reescribiendo Class Dos';
segundaClase[0].innerText = 'Reescribiendo Class Dos';
segundaClase[0].innerHTML = 'Reescribiendo Class Dos';

segundaClase[1].style.color = 'red';
segundaClase[1].style.backgroundColor = 'black';
segundaClase[1].style.padding = '20px';
segundaClase[1].style.fontSize = '35px';
segundaClase[1].style.textAlign = 'center';
segundaClase[1].textContent = 'Reescribiendo Class Dos';
segundaClase[1].innerText = 'Reescribiendo Class Dos';
segundaClase[1].innerHTML = 'Reescribiendo Class Dos';
console.log('-----------------');

const terceraClase = document.getElementsByClassName('prueba');
console.log(terceraClase);

terceraClase[0].style.color = 'white';
terceraClase[0].style.backgroundColor = 'black';
terceraClase[0].style.padding = '20px';
terceraClase[0].style.fontSize = '35px';
terceraClase[0].style.textAlign = 'center';
terceraClase[0].textContent = 'Reescribiendo Class Tres';
terceraClase[0].innerText = 'Reescribiendo Class Tres';
terceraClase[0].innerHTML = 'Reescribiendo Class Tres';
console.log('-----------------');

const cuartaClase = document.getElementsByClassName('claseDiv');
console.log(cuartaClase);

cuartaClase[0].style.color = 'brown';
cuartaClase[0].style.backgroundColor = 'black';
cuartaClase[0].style.padding = '20px';
cuartaClase[0].style.fontSize = '35px';
cuartaClase[0].style.textAlign = 'center';
console.log('-----------------');

const quintaClase = document.getElementsByClassName('otraPruebaClase');
console.log(quintaClase);

quintaClase[0].style.color = 'purple';
quintaClase[0].style.backgroundColor = 'black';
quintaClase[0].style.padding = '20px';
quintaClase[0].style.fontSize = '35px';
quintaClase[0].style.textAlign = 'center';
quintaClase[0].textContent = 'Reescribiendo Class Quinta';
quintaClase[0].innerText = 'Reescribiendo Class Quinta';
quintaClase[0].innerHTML = 'Reescribiendo Class Quinta';

quintaClase[1].style.color = 'purple';
quintaClase[1].style.backgroundColor = 'black';
quintaClase[1].style.padding = '20px';
quintaClase[1].style.fontSize = '35px';
quintaClase[1].style.textAlign = 'center';
quintaClase[1].textContent = 'Reescribiendo Class Quinta';
quintaClase[1].innerText = 'Reescribiendo Class Quinta';
quintaClase[1].innerHTML = 'Reescribiendo Class Quinta';
console.log('-----------------');