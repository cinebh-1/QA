describe('User registration - second approach', () => {
    it('Parabank user registration', () => {
        //loginPanel contains tag a which is third child element
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get("input#customer\.firstName").type("Johnatan");
        cy.get("input#customer\.lastName").type("James");
        cy.get("input#customer\.address\.street").type("Barley st 23");
        cy.get("input#customer\.address\.city").type("Ohio");
        cy.get("input#customer\.address\.state").type("USA");
        cy.get("input#customer\.address\.zipCode").type("12312445");
        cy.get("input#customer\.phoneNumber").type("+1 (966) 624-3304");
        cy.get("input#customer\.ssn").type("987654321");
        cy.get("input#customer\.username").type("JohnJames213");
        cy.get("input#customer\.password").type("RandomPassword");
        cy.get("input#repeatedPassword").type("RandomPassword");
        cy.get("[colspan='2'] > .button").click();
    })
}) 