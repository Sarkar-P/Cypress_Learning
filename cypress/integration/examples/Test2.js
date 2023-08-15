/// <reference types="Cypress" />
describe('My Third Test Suite', function()
{
   it('My Third Test case', function()
   {

    //checking the checkboxes
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    // cy.get('#checkBoxOption1').check().should('not.be.checked')
    // //cy.get('input[type="checkbox"]').check([option2,option3])

    //selecting the option
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

    //Dynamic dropdown

    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item-wrapper').each(($e1,index,$list) =>
    {
        if($e1.text()=='India')
        {
            cy.wrap($e1).click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')

    //visible and invisible

  
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')

    //radio button
    cy.get('.radioButton').check(['radio1']).should('be.checked','radio1')

   })
})