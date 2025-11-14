describe('Launch test application', () => {
    it('Open Parabank', () => {
        //visiting URL 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        //getting locator element 
        cy.get("input[name='username']").type('test');
        cy.get("input[name='password']").type('test');
        //button clicking 
        cy.get("input[class='button']").click(); 
    })
})  

