const primerTag = document.querySelectorAll('h1');
console.log(primerTag);

primerTag.forEach(function(etiquetaUno) {
    etiquetaUno.style.color = 'aqua';
    etiquetaUno.style.background = 'black';
    etiquetaUno.style.padding = '20px';
    etiquetaUno.style.textAlign = 'center';
    etiquetaUno.style.fontSize = '35px';
    etiquetaUno.textContent = 'Reescribiendo Tag';
    etiquetaUno.innerText = 'Reescribiendo Tag';
    etiquetaUno.innerHTML = 'Reescribiendo Tag';

    /* Acceder al valor interno del elemento */
    // console.log(etiquetaUno.textContent);
    // console.log(etiquetaUno.innerText);
    console.log(etiquetaUno.innerHTML);
});
console.log('-----------------------------');

const primerClass = document.querySelectorAll('.subtitle');
console.log(primerClass);

for (let index = 0; index < primerClass.length; index++) {
    primerClass[index].style.color = 'Blue';
    primerClass[index].style.background = 'black';
    primerClass[index].style.padding = '20px';
    primerClass[index].style.textAlign = 'center';
    primerClass[index].style.fontSize = '35px';
    primerClass[index].textContent = 'Reescribiendo Clase';
    primerClass[index].innerText = 'Reescribiendo Clase';
    primerClass[index].innerHTML = 'Reescribiendo Clase';

    /* Acceder al valor interno del elemento */
    // console.log(primerClass[index].textContent);
    // console.log(primerClass[index].innerText);
    console.log(primerClass[index].innerHTML);
}
console.log('----------------------------');

const primerID = document.querySelectorAll('#ThirdTittle');
console.log(primerID);

primerID.forEach(function(primerID) {
    primerID.style.color = 'yellow';
    primerID.style.background = 'black';
    primerID.style.padding = '20px';
    primerID.style.textAlign = 'center';
    primerID.style.fontSize = '35px';
    primerID.textContent = 'Reescribiendo ID';
    primerID.innerText = 'Reescribiendo ID';
    primerID.innerHTML = 'Reescribiendo ID';

    /* Acceder al valor interno del elemento */
    // console.log(primerID.textContent);
    // console.log(primerID.innerText);
    console.log(primerID.innerHTML);
});
console.log('----------------------------');

const primerAttribute = document.querySelectorAll('[class=subtitleDos]');
console.log(primerAttribute);

primerAttribute.forEach(function(primerAttribute) {
    primerAttribute.style.color = 'red';
    primerAttribute.style.background = 'black';
    primerAttribute.style.padding = '20px';
    primerAttribute.style.textAlign = 'center';
    primerAttribute.style.fontSize = '35px';
    primerAttribute.textContent = 'Reescribiendo Attribute';
    primerAttribute.innerText = 'Reescribiendo Attribute';
    primerAttribute.innerHTML = 'Reescribiendo Attribute';

    /* Acceder al valor interno del elemento */
    // console.log(primerAttribute.textContent);
    // console.log(primerAttribute.innerText);
    console.log(primerAttribute.innerHTML);
});
console.log('----------------------------');