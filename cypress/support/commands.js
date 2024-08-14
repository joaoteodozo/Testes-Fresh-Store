// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('cadastro', () => {
    cy.contains('a', 'clique aqui').click();
    cy.get('input[id="register-fullname"]').type('João Teodozo');
    cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
    cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
    cy.get('input[id="register-date"]').type('2003-04-20');
    cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
    cy.contains('button', 'Registrar').click();
})

Cypress.Commands.add('login', () => { 
    cy.get('input[id="login-username"]').type(Cypress.env('username'), {log: false});
    cy.get('input[id="login-password"]').type(Cypress.env('password'), {log: false});
    cy.contains('button', 'Login').click();
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })