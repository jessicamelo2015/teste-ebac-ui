/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade:Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista',()=>{
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });


    it('Deve buscar um produto com sucesso', () => {
        let produto='Ajax Full-Zip Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain',produto)
    });
    it('Deve visitar a página do produto ', () => {
        produtosPage.visitarProduto('Ajax Full Zip Sweatshirt')
        cy.get('.product_title').should('contain','Ajax Full-Zip Sweatshirt')
        
    });
    it('Deve adicionar produto ao carrinho', () => {
        let qtd=7
        produtosPage.buscarProduto('Ingrid Running Jacket')
        produtosPage.addProdutoCarrinho('XL','Orange',qtd)
        cy.get('.woocommerce-message').should('contain', qtd+' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
        
    });
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
             produtosPage.buscarProduto(dados[1].nomeProduto)
             produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)


        })
        
        
    });
});
