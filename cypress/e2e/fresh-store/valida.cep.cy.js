describe('Validações no carrinho de compras', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app');
        cy.cadastro();
        cy.login();
    })
  
    it('Valida se caso o CEP seja inválido retorna a mensagem de erro', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('00000000');
        cy.on('window:alert', (text) => {
            expect(text).to.equal('CEP não encontrado. Verifique o número e tente novamente.');
        });
    })

    it('Valida se não preencher o CEP retorna a mensagem de erro', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('button[id="payment-btn"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, preencha todos os campos do endereço!');
        });
    })
  })