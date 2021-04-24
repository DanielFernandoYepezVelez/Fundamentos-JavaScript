const cliente = {
    nombre: 'Daniel Fernando',
    balance: 500
};

describe('Testing Al Objeto De Cliente', () => {
    test('El Cliente Es Premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Daniel Fernando?', () => {
        expect(cliente.nombre).toBe('Daniel Fernando');
    });

    /* Aqui Estamos Aplicando Una Prueba Para Que No Sea Un Valor Especifico */
    test('No Es Otro Cliente', () => {
        expect(cliente.nombre).not.toBe('Danielito');
    });

    test('No Es El Balance De 600', () => {
        expect(cliente.balance).not.toBe(600);
    });
});