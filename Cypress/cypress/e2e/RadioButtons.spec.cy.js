describe('Clicking on radio buttons', () => {
    it('User clicks on radio buttons', () => {
        cy.visit("https://qa-practice.netlify.app/radiobuttons");
        //clicking first radio button 
        cy.get("input[id='radio-button1']").check();
        cy.wait(1500);
        //clicking second radio button 
        cy.get("input[id='radio-button2']").check();
        cy.wait(1500);
        //clicking third radio button
        cy.get("input[id='radio-button3']").check();
        cy.wait(1500);
    })
}) 

describe('More clicking on radio buttons', () => {
    it('More user clicking on radio buttons', () => {
        cy.visit("https://practice.expandtesting.com/radio-buttons");
        cy.get("input[id='red']").check();
        cy.wait(1500);
        cy.get("input[id='yellow']").check();
        cy.wait(1500);
        cy.get("input[id='black']").check();
        cy.wait(1500);
        cy.get("input[id='blue']").check();
        cy.wait(1500);
        cy.get("input[id='basketball']").check();
        cy.wait(1500);
        cy.get("input[id='football']").check();
        cy.wait(1500);
        cy.get("input[id='tennis']").check();
        cy.wait(1500);
    })
})