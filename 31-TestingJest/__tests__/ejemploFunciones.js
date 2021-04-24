/* Es Una Parte Muy Común Testear Funciones */

/* Aqui Estamos Comprobando Que Estas Funciones Hagan 
Lo Que Uno Espera */

/* La Suma Tiene El Testing Para Valores Correctos, Como Para
Valores Incorrectos Y Eso Es Grantia Para No Tener Errores En
Producción */
function sumar(a, b) {
    return a + b;
}

/* La Resta Tiene El Testing Para Valores Correctos, Como Para
Valores Incorrectos Y Eso Es Grantia Para No Tener Errores En
Producción */
function restar(a, b) {
    return a - b;
}

describe('Testing A Las Funciones De Suma Y Resta', () => {
    test('Suma De Los Valores 20 Y 30', () => {
        expect(sumar(20, 30)).toBe(50);
    });

    test('Resta De Los Valores 10 y 5', () => {
        expect(restar(10, 5)).toBe(5);
    });

    test('Que La Suma Con Los Valores 10 Y 10, No Sea 10', () => {
        expect(sumar(10, 10)).not.toBe(10);
    });

    test('Que La Resta Con Los Valores 10 Y 5, No Sea 2', () => {
        expect(sumar(10, 5)).not.toBe(2);
    });
});