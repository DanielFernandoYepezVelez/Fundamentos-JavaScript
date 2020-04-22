/* Creando o Instanciando el objeto(Clase) Map */
const cliente = new Map();
console.log(cliente);
console.log('-----------------------');

/* Agregando Contenido en el objeto(Clase) Map, por medio de su metodo set y en formato tipo llave-valor */
cliente.set('nombre', 'Daniel Fernando');
cliente.set('apellidos', 'Yepez Velez');
cliente.set('edad', 27);
cliente.set('soltero', true);

console.log(cliente);
console.log('-----------------------');

/* Obtener los  Valores del objeto(Clase) Map Instanciado */
const nombre = cliente.get('nombre');
const apellidos = cliente.get('apellidos');
const edad = cliente.get('edad');
const estadoCivil = cliente.get('soltero');

console.log(nombre);
console.log(apellidos);
console.log(edad);
console.log(estadoCivil);
console.log('------------------------');

/* Métodos para los Map */
/* Longitud */
console.log('Longitud => ', cliente.size);
console.log('------------------------');

/* Comprobar si existe un valor o clave, retorna un valor booleano */
console.log('Existe', cliente.has('nombre'));
console.log('NO Existe', cliente.has('nombreUno'));
console.log('-----------------------');

/* Eliminar un elemento del MAP */
cliente.delete('soltero')
console.log('Despues De Eliminar =>', cliente);
console.log('Despues De Eliminar(Longitud) =>', cliente.size);
console.log('-----------------------');

/* Eliminando todo el contenido de un MAP */
const nuevoMap = new Map();
nuevoMap.set('Array_Numerico =>', [1, 2, 3, 4, 5, 6, 7]);
console.log(nuevoMap);

nuevoMap.clear();
console.log(nuevoMap);
console.log('-----------------------');

/* Como Asignar Propiedades Por defecto o default a un Map */
/* Al Map Y o le puedo pasar datos o valores algo similar que el set(), pero aqui necesito un corchete global y un corchete por cada valor por default */
const paciente = new Map(
    [
        ['nombre', 'pacienteDefault'],
        ['habitacion', 'CuartoDefault']
    ]
);

/* Supongamos que no se pasan las llaves-valores */
// paciente.set('nombre', 'Antonio');
// paciente.set('habitacion', 404);
console.log(paciente);
console.log('-----------------------');

/* Recorriendo Un Map Por Un forEach */
paciente.forEach((paciente, index) => {
    console.log(`${index} y ${paciente}`);
});
console.log('-----------------------');