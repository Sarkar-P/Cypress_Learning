class HomePageObjects{


    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    getTwoWayDataBinding()
    {
        return cy.get('input[name="name"]:nth-child(1)')
    }
    getGender()
    {
        return  cy.get('select')
    }
    getRadioButton()
    {
        return cy.get('#inlineRadio3')
    }
    getShop()
    {
        return  cy.contains('Shop')
    }
    
}

export default HomePageObjects;