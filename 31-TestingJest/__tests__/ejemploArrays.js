const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing Al Carrito De Compras', () => {
    test('Probar Que El Array Tenga 3 Elementos', () => {
        expect(carrito).toHaveLength(3);
    });

    test('Verificar Que El Carrito No Este Vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });
});