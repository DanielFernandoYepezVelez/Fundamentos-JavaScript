/* Accediendo Al DOM */
const btnAPI2 = document.getElementById('apiBTN2');

/* Eventos Del Usuario Y Del Sistema */
btnAPI2.addEventListener('click', cargarAPI);

/* Funcionalidad Para Obtener Datos Desde Una API Con Fetch API */
/* Se agrego solo una linea de seguridad a diferencia de los otros ejercicios.
Se debe recordar que fetch() internamente tiene construida una promesa con sus respectivos callbacks resolve y reject, entonces en esa linea de seguridad le decimos que si la respuesta es true nos devuelva la promesa con el resolve si no es asi, entonces que devuelva la promesa con el reject, y estos dos callbacks son disparados gracias a .then() y a .catch(), depende de la respuesta de la petición con fetch. */
function cargarAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(users => {
            let arrayUsers = '';

            users.forEach(user => {
                arrayUsers +=
                    `<li>
                    ${user.name}
                  </li>`;
            })

            document.getElementById('resultado').innerHTML = arrayUsers;
        })
        .catch(err => {
            console.log(err);
        });
}