describe('Realiza login incorretamente e valida se as mensagens de erro são exibidas', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
    })
  
    it('Valida se ao não preencher nenhum campo, a mensagem de erro é exibida', () => {
        cy.contains('button', 'Login').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha todos os campos abaixo!');
        });
    });

    it('Valida se ao não preencher o campo de senha, a mensagem de erro é exibida', () => {
        cy.get('input[id="login-username"]').type(Cypress.env('username'));
        cy.contains('button', 'Login').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha sua senha!');
        });
    });

    it('Valida se ao não preencher o campo de username, a mensagem de erro é exibida', () => {
        cy.get('input[id="login-password"]').type(Cypress.env('password'));
        cy.contains('button', 'Login').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha seu nome de usuário!');
        });
    });

    it('Valida se ao preencher os campos com dados incorretos, a mensagem de erro é exibida', () => {
        cy.get('input[id="login-username"]').type('username');
        cy.get('input[id="login-password"]').type('password');
        cy.contains('button', 'Login').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Usuário ou senha incorretos!');
        });
    });
  })