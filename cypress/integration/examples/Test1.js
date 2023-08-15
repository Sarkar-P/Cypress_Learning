describe('My Second Test Suite', function()
{
   it('My second Test case', function()
   {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.wait(2000)
    cy.get(".search-keyword").type('ca')
    cy.get('.products').as('productsofElement')
    cy.get('.products').find('.product').each(($e1,index,$list) =>
      {
        const textVeg= $e1.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
          cy.wrap($e1).find('.product-action button').click()
        }     
      })
      cy.get('.cart-icon').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

   })
})