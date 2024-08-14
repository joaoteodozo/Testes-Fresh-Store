describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Realiza cadastro corretamente e em seguida realiza login', () => {
        cy.contains('a', 'clique aqui').click();
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.get('input[id="login-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="login-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Login').click();
    })
  })