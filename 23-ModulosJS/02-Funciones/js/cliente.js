/* Exportando Variables */
export const nombreCliente = 'Daniel Fernando';
export const apellidoCliente = 'Yepez Velez';
export const ahorroCliente = 200;
export const aliasCliente = 'DiDi';

export const mostrarInformacion = (nombre, apellido, ahorro) => {
    return `El Nombre Del Cliente Es ${nombre} Y Su Apellido Es ${apellido}, Tiene En Su Cuenta Bancaria Un Ahorro De $${ahorro}`;
}

export const mostrarAlias = () => {
    return `El Alias Del Cliente ${nombreCliente} ${apellidoCliente} Es ${aliasCliente}`;
}