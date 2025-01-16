import {gerarNumeroCartao} from "../../support/functions";
import {gerarCVC} from "../../support/functions";
import {gerarNumeroCasa} from "../../support/functions";
const numeroCartao = gerarNumeroCartao();
const cvc = gerarCVC();
const numeroCasa = gerarNumeroCasa();

describe('Realizar fluxo de compra com os três tipos de pagamentos diferentes', () => {

    beforeEach(() => {
        cy.visit('https://fresh-store-qa.vercel.app');
        cy.cadastro();
        cy.login();
    })
  
    it('Realiza uma compra corretamente com cartão de crédito', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type(numeroCasa);
        cy.wait(2000);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(1);
        cy.get('input[id="card-number"]').type(numeroCartao);
        cy.get('input[id="card-expiry"]').type('2029-04');
        cy.get('input[id="card-cvc"]').type(cvc);
        cy.get('button[id="confirm-payment-btn"]').click();
    })

    it('Realiza uma compra corretamente com pix', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type(numeroCasa);
        cy.wait(2000);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(2);
        cy.get('button[id="confirm-payment-btn"]').click();
    })

    it('Realiza uma compra corretamente com boleto', () => {
        cy.get('button[data-id="1"]').click();
        cy.get('a[id="cart"]').click();
        cy.get('button[id="finalize-btn"]').click();
        cy.get('input[id="zip"]').type('11420440');
        cy.get('input[id="address"]').click();
        cy.get('input[id="number"]').type(numeroCasa);
        cy.wait(2000);
        cy.get('button[id="payment-btn"]').click();
        cy.get('select[id="payment-method"]').select(3);
        cy.get('button[id="confirm-payment-btn"]').click();
    })
  })