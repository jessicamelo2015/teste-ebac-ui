/// <reference types="cypress"/>

describe('Funcionalidade:Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um produto da lista',()=>{
        cy.get('.product-block')
        //.first()
        //.last()
        .contains('Apollo Running Short')  
        //.eq(2)   //ele direciona para a posicao da lista 
        .click()
        cy.get('#tab-description ').should('contain','Fleet of foot or slow')
    });
});
