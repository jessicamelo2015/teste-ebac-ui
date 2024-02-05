///<reference types="cypress"/>

     describe('Funcionalidade: Login',() => {

        it('Deve fazer login com sucesso',() =>{
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('jessicamelo2015@gmail.com')
            cy.get('#password').type('rafinha2015@')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, jessicamelo2015 (não é jessicamelo2015? Sair)')
        })

        })