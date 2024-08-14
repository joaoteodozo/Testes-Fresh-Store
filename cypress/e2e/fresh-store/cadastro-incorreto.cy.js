import dayjs from 'dayjs';
Cypress.dayjs = dayjs;
const dataAtual = Cypress.dayjs().format('YYYY-MM-DD');

describe('Realiza cadastro incorretamente e valida se as mensagens de erro são exibidas', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
        cy.contains('a', 'clique aqui').click();
    })

    it('Valida se ao não preencher o nome completo a mensagem de erro é exibida', () => {
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha seu nome completo!');
        });
    });

    it('Valida se ao não preencher o username a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha seu nome de usuário!');
        });
    });

    it('Valida se ao não preencher o e-mail a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha seu e-mail!');
        });
    });

    it('Valida se ao não preencher a data de nascimento a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha sua data de nascimento!');
        });
    });

    it('Valida se ao não preencher a senha a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha sua senha!');
        });
    });

    it('Valida se ao tentar cadastrar usuário com idade menor que 18 anos a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type(dataAtual);
        cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Você deve ter pelo menos 18 anos para realizar o cadastro!');
        });
    });

    it('Valida se ao tentar cadastrar usuário já existente a mensagem de erro é exibida', () => {
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.contains('a', 'clique aqui').click();
        cy.get('input[id="register-fullname"]').type('João Teodozo');
        cy.get('input[id="register-username"]').type(Cypress.env('username'), {log: false});
        cy.get('input[id="register-email"]').type('joaoteodozo@teste.com');
        cy.get('input[id="register-date"]').type('2003-04-20');
        cy.get('input[id="register-password"]').type(Cypress.env('password'), {log: false});
        cy.contains('button', 'Registrar').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Usuário já existente!');
        });
    });
});