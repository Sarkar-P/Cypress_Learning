class Productpage{

    products()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
}

export default Productpage;