/// <reference types="Cypress" />
describe('My First Test Suite', function()
{
   it('My First Test case', function()
   {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.wait(2000)
      cy.get(".search-keyword").type('ca')
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').as('productsofElement')
      cy.get('@productsofElement').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
      cy.get('.products').find('.product').each(($e1,index,$list) =>
      {
        const textVeg= $e1.find('h4.product-name').text()
        if(textVeg.includes('Cashews '))
        {
          cy.wrap($e1).find('.product-action button').click()
        }
            
      })
      cy.get('.brand.greenLogo').should('have.text','GREENKART')
      cy.get('.brand.greenLogo').then(function(logoElement)
      {
          cy.log(logoElement.text())
      })
   })
})