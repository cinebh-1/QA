describe('Launch application', () => {
  it('Launch the test application', () => {
    //open given URL 
    cy.visit('https://www.saucedemo.com/v1/')
  })
})

/*(this starts Cypress in background(headless mode))
.\node_modules\.bin\cypress.cmd run*/
/*(this runs specific test file, runs in headed mode and in Chrome browser)
.\node_modules\.bin\cypress.cmd run --spec .\cypress\e2e\Test1.spec.cy.js --headed --browser chrome*/

