/// <reference types="Cypress" />
import HomePageObjects from "./pageobjects/homePageObjects"
import * as Productpage from "./pageobjects/Productpage"
describe('My Third Test Suite', function()
{
    before(function()
    {
         cy.fixture('example').then(function(data)
         {
                this.data=data
         })
    })
   it('My Third Test case', function()
   {
    const homepageObject=new HomePageObjects()
    const productObject=new Productpage()
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homepageObject.getEditBox().type(this.data.name)
    homepageObject.getGender().select(this.data.gender)
    homepageObject.getTwoWayDataBinding().should('have.value',this.data.name)
    homepageObject.getEditBox().should('have.attr','minlength','2')
    homepageObject.getRadioButton().should('be.disabled')
    homepageObject.getShop().click()
    this.data.products.forEach(element => {

     cy.slectProduct(element)
     
    });
    productObject.products().click()   
       
   })
})