describe("Cypress clear() method", () => {
    it("Using clear() method", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get("input[name='username']").type("John");
        cy.wait(1000);
        cy.get("input[name='password']").type("Doe");
        cy.wait(1000);
        cy.get("input[name='username']").clear();
        cy.wait(1000);
        cy.get("input[name='password']").clear();
        cy.wait(1000);
    })
})