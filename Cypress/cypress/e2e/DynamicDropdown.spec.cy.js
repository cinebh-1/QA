describe('Handling dynamic dropdown', () => {
    it('Dynamic dropdown', () => {
        cy.visit("https://www.booking.com/");
        //get dynamic input field, click on it and type New with .2 seconds delay 
        cy.get("input[placeholder='Where are you going?']").click().clear().type("New", {delay: 200});
        //get first result from list and click on it 
        cy.get("div[data-testid='autocomplete-results'] > div li:first-child").click();
    })
})

