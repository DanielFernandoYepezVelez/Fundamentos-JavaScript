/* Para Probar El Objeto Completo Yo Puedo Convertir
El Objeto A Un String Con Json.stringify Y Compararlo.
Pero Con Jest Tenemos Otra Opción Que Se Conocen Como Los
Snapshots */

/* Se Crea Una Carpeta Aparte Para Compara Los Objetos Completos */
/* Para Actualizar Un Snapshot Ya Existente npm t -- -u */
const cliente = {
    nombre: 'Daniel Fernando',
    balance: 500,
    tipo: 'Premium Gold'
};

describe('Testing Al Objeto De Cliente', () => {
    test('El Cliente Es Daniel', () => {
        expect(cliente).toMatchSnapshot();
    });
});