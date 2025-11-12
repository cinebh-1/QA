describe('Login with created account', () => {
    it('user login with username and password', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get("input[name='username']").type("JasonBourne123");
        cy.get("input[name='password']").type("RandomPassword321");
        cy.contains('Log In').click();
    })
})  
