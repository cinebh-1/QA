describe('Ticking a checkbox', () => {
    it('User ticks a checkbox', () => {
        cy.visit("https://qa-practice.netlify.app/checkboxes");
        //checking first option 
        cy.get("#checkbox1.form-check-input").check();
        cy.wait(1500);
        //checking second option 
        cy.get("#checkbox2.form-check-input").check();
        cy.wait(1500);
        //checking third option 
        cy.get("#checkbox3.form-check-input").check();
        //reset checkboxes to default value 
        cy.get("button[type='reset']").click();
    })
})
 
