let persona = {
  nombre: 'Daniel Fernando',
  apellidos: 'Yépez Vélez',
  edad: 22
}
/* Si apuntan a la misma referencia, en el momento
de comprarlos son true */
let OtraPersona = persona;
console.log(persona);
console.log(OtraPersona);
(OtraPersona === persona)?console.log('Si son iguales, porque apuntan al mismo espacio ',
                                       'en memoria ram.')
                         :console.log('No son iguales')
console.log(' ');

 let persona2 = {
  nombre: 'Daniel Fernando',
  apellidos: 'Yépez Vélez',
  edad: 22
}
/* No apuntan a la misma referencia, solo tienen
atributos iguales solo es eso, si los comparamos
son false */
console.log(persona)
console.log(persona2);
(persona === persona2)?console.log('Si son iguales')
                      :console.log('No son iguales, No apuntan al mismo espacio ',
                                   'en memoria ram.')