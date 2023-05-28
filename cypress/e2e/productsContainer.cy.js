describe("ProductsContainer", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/products");
    })

    it('should display a header', () => {
        cy.get('#logo').should('contain', 'Big Top Circus Shop')
    })

    it('should display a nav bar', () => {
        cy.get('#nav-bar > li').should('have.length', 2)
    })

    it('should display a list of products', () => {
        const productListItems = cy.get('#products-list > li')
        productListItems.should('have.length', 4)
    })
    xit('should start with an empty basket', () => {
        
    })
    xit('should be able to add an item to the basket', () => {
    
    })
    // it('should have working number buttons', () => {
    //     cy.get('#number2').click();
    //     cy.get('.display').should('contain', '2')
    //   })
})