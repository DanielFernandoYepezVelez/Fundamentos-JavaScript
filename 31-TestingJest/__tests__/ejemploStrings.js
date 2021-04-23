const password = '123456';

describe('Valida Que El Password No Este Vacio Y Tenga Una Extensión De 6 Caracteres', () => {
    test('Que El Password Tenga 6 Caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('Password No Vacío', () => {
        expect(password).not.toHaveLength(0);
    });
});