///<reference types="cypress"/>

     describe('Funcionalidade: Login',() => {
        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        });
       /// afterEach(() => {
           ///cy.screenshot()
        /// });

        it('Deve fazer login com sucesso',() =>{
            cy.get('#username').type('jessicamelo2015@gmail.com')
            cy.get('#password').type('rafinha2015@')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, jessicamelo2015 (não é jessicamelo2015? Sair)')
        })

        it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
            
            cy.get('#username').type('jessicamelo@gmail.com')
            cy.get('#password').type('rafinha2015@')
            cy.get('.woocommerce-form > .button').click()
           // cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
            cy.get('.woocommerce-error').should('exist')
        });

        it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
           
            cy.get('#username').type('jessicamelo2015@gmail.com')
            cy.get('#password').type('raf')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail jessicamelo2015@gmail.com está incorreta. Perdeu a senha?')
            cy.get('.woocommerce-error').should('exist')
        });

        

        

        })