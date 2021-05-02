/* Me Facilita El Autocompleta Con Lo Relacionado A Cypress,
Tengo Que Probar Si Me Funciona Para Jest */

/// <reference types="cypress" />

describe('Carga La Pagina Principal', () => {
    it('Carga La Pagina Principal', () => {
        /* Aqui Le Digo A Cypress A Donde Se Tiene Que Conectar O Donde Esta El 
        Archivo Que Tiene Que Testear */
        cy.visit('http://127.0.0.1:5500/32-TestingCypress/index.html');

        /* Si El Navegador Contiene Un h2 */
        cy.contains('h2', 'Administrador de Pacientes de Veterinaria');

        /* Deberia De Existir Un h2, Para Obtenerlo */
        cy.get('h2').should('exist');
    });
});