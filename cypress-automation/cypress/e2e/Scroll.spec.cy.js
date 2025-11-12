describe("Cypress scroll", () => {
    it("Scroll demo", () => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        //scroll to the bottom of webpage 
        cy.scrollTo("bottom");
        cy.wait(1200);
        //scroll to the top of webpage
        cy.scrollTo("top");
        cy.wait(1200);
        //navigate to web element and scroll into wiewport
        cy.get("#footerPanel > ul:nth-child(1) > li:nth-child(5) > a").scrollIntoView();   
        
        //scroll webpage top to bottom with for loop
        var i = 0, xPx = 0, yPx = 100; 
        for (i = 0; i < 2; i++) {
            cy.scrollTo(xPx, yPx);
            cy.wait(1200);
            yPx += 100;
        }
    })
})