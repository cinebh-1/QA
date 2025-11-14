//valid user account needed before login 
describe('Handling static dropdown', () => {
    it('Static dropdown', () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get("input[name='username']").type("John_Doe123");
        cy.get("input[name='password']").type("12345678");
        cy.get("input[value='Log In']").click();
         
        cy.get("table >tbody > tr > td > a").click();
        
        //static dropdown (go trough each option using names of month) 
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
            "September", "October", "November", "December"];

        //accessing element using name (string)
        for (var i = 0; i < 12; i++) { 
            cy.get("#month").select(months[i]);
            cy.wait(1500);
        } 
        
        //accessing element by its position (number)
        for (var i = 0; i <= 12; i++) {
            cy.get("#month").select(i);
            cy.wait(1500);
        } 
    })
})

