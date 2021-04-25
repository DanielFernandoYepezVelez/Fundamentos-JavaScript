/* Jest Esta Escrito Con Node JS, Y No Se Soportan
Las Importaciones Al 100%, Por Ende, La Mejor Opción
Es Habilitar Babel, Para Que Se Pueda Utilizar
Las Importaciones Normales (Babel Transpila El Código) */
import { sumar } from '../js/funcionPrueba.js';

describe('Suma De 2 Números', () => {
    test('Sumar 10 Y 20, Debe Dar Como Resultado 30', () => {
        expect(sumar(10, 20)).toBe(30);
    });
});