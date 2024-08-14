describe('Validações no carrinho de compras', () => {

    beforeEach(() => {
        cy.visit('https://qa-fresh-store.vercel.app')
        cy.cadastro();
        cy.login();
    })
  
    it('Valida se a soma dos produtos no carrinho está correta', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('button[data-id="2"]').click();
        cy.get('button[data-id="6"]').click();
        cy.get('button[data-id="8"]').click();
        cy.get('button[data-id="9"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('#total-value').should('be.visible').should('have.text', 'Valor Total: R$260.00');
    })
    
    it('Valida se ao tentar prosseguir com o carrinho vazio a mensagem de erro é exibida', () => {
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Por favor, selecione um produto antes de prosseguir!');
        });
    })
  })