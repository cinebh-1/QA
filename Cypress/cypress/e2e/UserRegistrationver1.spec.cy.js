describe('User registration - first approach', () => {
    it('Parabank user account registration', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        //click on element if it contains certain string 
        cy.contains("Register").click();
        //fill out all fields using CSS selectors
        cy.get("input[id='customer.firstName']").type("Jason");
        cy.get("input[id='customer.lastName']").type("Bourne");
        cy.get("input[id='customer.address.street']").type("Langley 22");
        cy.get("input[id='customer.address.city']").type("Virginia");
        cy.get("input[id='customer.address.state']").type("USA");
        cy.get("input[id='customer.address.zipCode']").type("1234");
        cy.get("input[id='customer.phoneNumber']").type("+1 (514) 339-0705");
        cy.get("input[id='customer.ssn']").type("123456789");
        cy.get("input[id='customer.username']").type("JasonBourne123")
        cy.get("input[id='customer.password']").type("RandomPassword321");
        cy.get("input[id='repeatedPassword']").type("RandomPassword321");
        cy.get('[colspan="2"] > .button').click();
        cy.wait(2000);
    })
})  

