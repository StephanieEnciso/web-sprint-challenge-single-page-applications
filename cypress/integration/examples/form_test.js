describe("Lambda Eats App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    const nameInput = () => cy.get('input[name = "name"]');
    const email = () => cy.get('input[name = "email"]');
    const pepperoni = () => cy.get('input[name = "pepperoni"]');
    const sausage = () => cy.get('input[name = "sausage"]');
    const size = () => cy.get('select[name = "size"]');
    const submitBtn = () => cy.get('#done');

    it("Making sure it's working", () => {
        expect(true).to.equal(true);
    })

    it("Testing the form to add text, select multiple topping, and to submit it", () => {
        nameInput()
         .should('have.value', '')
         .type('Thor')
         .should('have.value', 'Thor');
        email()
         .should('have.value', '')
         .type('thor@doggos.com')
         .should('have.value', 'thor@doggos.com');
        size().select('large');
        pepperoni().check();
        sausage().check();
        submitBtn().click();

        
    })

})