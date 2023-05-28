describe("ProductsContainer", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/products");
    })

    it('should display a header', () => {
        cy.get('#logo').should('contain', 'Big Top Circus Shop')
    })

    xit('should display a nav bar', () => {
        
    })

    xit('should display a list of products', () => {
        
    })
    // it('should have working number buttons', () => {
    //     cy.get('#number2').click();
    //     cy.get('.display').should('contain', '2')
    //   })
})