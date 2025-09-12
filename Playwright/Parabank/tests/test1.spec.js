const { executionAsyncId } = require('async_hooks');
const { log } = require('console');
const {test, expect} = require ('playwright/test');
const milisecondsTimeout = 1000;

test("Check menu items in upper left corner", async({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //check if these list items exist in menu 
    await expect(page.locator("ul[@class='leftmenu']")
    .getByRole('listitem'))
    .toHaveText(['Solutions', 'About Us', 'Services', 'Products', 'Locations', 'Admin Page']); 
    //check number of list items found in menu 
    await expect(page.locator("ul[@class='leftmenu']").getByRole('listitem')).toHaveCount(6);
})

test("Click items in menu(finish later)", async({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const listItems = page.locator("xpath=//ul[@class='leftmenu']");

    await listItems.getByRole('link', {name:"About Us"}).click();
    //await page.waitForTimeout(milisecondsTimeout);

    await listItems.getByRole('link', {name:"Services"}).click();
    //await page.waitForTimeout(milisecondsTimeout);

    await listItems.getByRole('link', {name:"Admin Page"}).click();
    //await page.waitForTimeout(milisecondsTimeout);

    await listItems.getByRole('link', {name: "Locations"}).click();
    await page.waitForTimeout(milisecondsTimeout);
    await page.goBack();
    await listItems.getByRole('link', {name: "Products"}).click();
    await page.waitForTimeout(milisecondsTimeout);
    await page.goBack();
})

test("Verify new user can be created", async({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', {name:'Register'}).click();

    const firstName = page.locator("//input[@id='customer.firstName']");
    const lastName = page.locator("//input[@id='customer.lastName']");
    const streetAddress = page.locator("//input[@id='customer.address.street']");
    const city = page.locator("//input[@id='customer.address.city']");
    const state = page.locator("//input[@id='customer.address.state']");
    const zipCode = page.locator("//input[@id='customer.address.zipCode']");
    const phoneNumber = page.locator("//input[@id='customer.phoneNumber']");
    const customerSSN = page.locator("//input[@id='customer.ssn']");
    const customerUsername = page.locator("//input[@id='customer.username']");
    const customerPassword = page.locator("//input[@id='customer.password']");
    const repeatedPassword = page.locator("//input[@id='repeatedPassword']");

    await firstName.fill('James');
    await lastName.fill('Foster');               
    await streetAddress.fill('123 Main St, Anytown USA');
    await city.fill('AnyCity');
    await state.fill('AnyState');
    await zipCode.fill('12345');
    await phoneNumber.fill('+1 (555) 123-4567');
    await customerSSN.fill('987654321');
    await customerUsername.fill('sunny1234');
    await customerPassword.fill('8aPpL3@tMOnE!');
    await repeatedPassword.fill('8aPpL3@tMOnE!');
    await page.getByRole('button', { name:'Register'}).click();

    await expect(page.getByText("Your account was created successfully. You are now logged in.")).toBeVisible();
})

test("Verify account overview information is present after logging in", async ({ page }) => {

    const username = "sunny1234";
    const password = "8aPpL3@tMOnE!";

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    const userName = page.locator("//input[@type='text']");
    const pass = page.locator("//input[@type='password']");

    await userName.fill(username);
    await pass.fill(password);
    await page.getByRole("button", { name:"Log In"}).click();

    // Account Overview
    //await expect(page.locator("//p[@class='smallText']")).toBeVisible(); 
    //await expect(page.getByRole('heading', { name:"Account Services"})).toBeVisible();
    await expect(page.getByRole('heading', { name:"Accounts Overview"})).toBeVisible();
    await expect(page.getByRole("table")).toBeVisible();
    
    // make sure account overview is present
    const table = page.locator("//table[@id='accountTable']");
    await expect(table).toBeVisible();
    const rowCount = await table.locator('tr').count();
    const bodyRowCount = await table.locator('tbody tr').count();
    console.log(rowCount);
    console.log(bodyRowCount);
    await expect(page.locator("//th[normalize-space()='Account']")).toBeVisible();
    await expect(page.locator("//th[normalize-space()='Balance*']")).toBeVisible();
    await expect(page.locator("//th[normalize-space()='Available Amount']")).toBeVisible(); 
}) 

test("Verify that new checking account can be created after logging in", async({ page }) => {

    const username = "sunny1234";
    const password = "8aPpL3@tMOnE!";

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    const userName = page.locator("//input[@type='text']");
    const pass = page.locator("//input[@type='password']");

    await userName.fill(username);
    await pass.fill(password);
    await page.getByRole("button", {name:"Log In"}).click();
    await page.getByRole("link", {name:"Open New Account"}).click();

    const menuSelection = page.locator("//select[@id='type']");
    await menuSelection.selectOption({value:"0"});
    const openNewAccountButton = page.locator("input[value='Open New Account']");
    await openNewAccountButton.click({delay: 4000});

    await expect(page.getByRole("heading", {name:"Account Opened!"})).toBeVisible();
    await expect(page.getByText("Congratulations, your account is now open.")).toBeVisible();
    await expect(page.getByText("Your new account number:")).toBeVisible();
    await page.locator("//a[@id='newAccountId']").click({delay: 4000});

    await expect(page.getByRole("heading", {name:"Account Details"}, {exact: true})).toBeVisible();
    await expect(page.getByText("Account Number:", {exact: true})).toBeVisible();
    await expect(page.getByText("Account Type:", {exact: true})).toBeVisible();
    await expect(page.getByText("Balance:", {exact: true})).toBeVisible();
    await expect(page.getByText("Available:", {exact: true})).toBeVisible();
    await expect(page.getByText("Account Activity", {exact: true})).toBeVisible();

    const monthActivityPeriod = page.locator("//select[@id='month']");
    await monthActivityPeriod.selectOption({value:"January"});
    const accountType = page.locator("//select[@id='transactionType']");
    await accountType.selectOption({value:"Credit"});
})

test("Verify that new savings account can be created after logging in", async({ page }) => {

    const username = "sunny1234";
    const password = "8aPpL3@tMOnE!";

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    const userName = page.locator("//input[@type='text']");
    const pass = page.locator("//input[@type='password']");

    // create bank account
    await userName.fill(username);
    await pass.fill(password);
    await page.getByRole("button", {name:"Log In"}).click();
    await page.getByRole("link", {name:"Open New Account"}).click();

    // account type (savings)
    const menuSelection = page.locator("//select[@id='type']");
    await menuSelection.selectOption({value:"1"});
    const openNewAccountButton = page.locator("input[value='Open New Account']");
    await openNewAccountButton.click({delay: 4000});

    // make sure this information is visible
    await expect(page.getByRole("heading", {name:"Account Opened!"})).toBeVisible();
    await expect(page.getByText("Congratulations, your account is now open.")).toBeVisible();
    await expect(page.getByText("Your new account number:")).toBeVisible();
    await page.locator("//a[@id='newAccountId']").click({delay: 4000});

    // make sure these are visible
    await expect(page.getByRole("heading", {name:"Account Details"}, {exact: true})).toBeVisible();
    await expect(page.getByText("Account Number:", {exact: true})).toBeVisible();
    await expect(page.getByText("Account Type:", {exact: true})).toBeVisible();
    await expect(page.getByText("Balance:", {exact: true})).toBeVisible();
    await expect(page.getByText("Available:", {exact: true})).toBeVisible();
    await expect(page.getByText("Account Activity", {exact: true})).toBeVisible();
    await expect(page.getByText("Activity Period:", {exact: true})).toBeVisible();
    await expect(page.getByText("Type:", {exact: true})).toBeVisible();

    // select monthly account activity you want to check
    const monthActivityPeriod = page.locator("//select[@id='month']");
    await monthActivityPeriod.selectOption({value:"May"});
    const accountType = page.locator("//select[@id='transactionType']");
    await accountType.selectOption({value:"All"});
    await page.getByRole("button", {name:"Go"}).click();

    const transactionTable = page.locator("//table[@id='transactionTable']");
    await expect(transactionTable).toBeVisible();
})

test("Verify if funds can be transfered from one account to another", async({ page }) => {

    test.slow();
    const username = "sunny1234";
    const password = "8aPpL3@tMOnE!";

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //username field
    const userName = page.locator("//input[@type='text']");
    //password field 
    const pass = page.locator("//input[@type='password']");

    await userName.fill(username);
    await pass.fill(password);
    await page.getByRole("button", {name:"Log In"}).click();
    await expect(page.getByText("Transfer Funds")).toBeVisible();
    await page.getByRole("link", {name:"Transfer Funds"}).click();
    await expect(page.getByRole("heading",{name:"Transfer Funds"})).toBeVisible();
    const moneyAmmount = page.locator("//input[@id='amount']");
    await moneyAmmount.fill("100", {delay: 3000});

    const moneySender = page.locator("//select[@id='fromAccountId']");
    await moneySender.selectOption({ index: 0 });
    const moneyReceiver = page.locator("//select[@id='toAccountId']");
    await moneyReceiver.selectOption({index: 1});
    await page.getByRole("button", {name:"Transfer"}).click();
})

test("Verify if buttons in navigation panel", async({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //home button
    const home = page.locator("//a[normalize-space()='home']");
    await home.click();
    //aboutUS button
    const aboutUS = page.locator("//a[normalize-space()='about']");
    await aboutUS.click();
    //contact button
    const contact = page.locator("//a[normalize-space()='contact']");
    await contact.click();
})

test("Verify customer care support section", async({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const customerCare = page.locator("//a[normalize-space()='contact']");
    await customerCare.click();

    await expect(page.getByRole("heading", { name:"Customer Care"})).toBeVisible();
    const nameField = page.locator("//input[@id='name']");
    await nameField.fill("James Foster");

    const emailField = page.locator("//input[@id='email']");
    await emailField.fill("yeiwhact@sharklasers.com");

    const phoneNumberField = page.locator("//input[@id='phone']");
    await phoneNumberField.fill("+1 202-918-2132");

    const textAreaField = page.locator("//textarea[@id='message']");
    await textAreaField.fill("This is example message!");

    await page.getByRole("button", { name:"Send to Customer Care"}).click();
    await expect(page.getByText("A Customer Care Representative will be contacting you.")).toBeVisible();
})

test("Verify forgot login info", async({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole("link", { name:"Forgot login info"}).click();
    await expect(page.getByRole("heading", { name:"Customer Lookup"})).toBeVisible();

    const firstNameField = page.locator("//input[@id='firstName']");
    await firstNameField.fill("");

    const lastNameField = page.locator("//input[@id='lastName']");
    await lastNameField.fill("");

    const addressField = page.locator("//input[@id='address.street']");
    await addressField.fill("");

    const cityField = page.locator("//input[@id='address.city']");
    await cityField.fill("");

    const stateField = page.locator("//input[@'address.state']");
    await stateField.fill("");

    const zipCodeField = page.locator("//input[@'address.zipCode']");
    await zipCodeField.fill("");

    const ssnField = page.locator("//input[@id='ssn']");
    await ssnField.fill("");

    await page.getByRole("button", { name:"Find My Login Info"}).click();
})

test("Verify bill paying", async({ page }) => {

    const userName = "sunny1234"; 
    const pass = "8aPpL3@tMOnE!";

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    
    const username = page.locator("//input[@type='text']");
    const password = page.locator("//input[@type='password']");

    await username.fill(userName);
    await password.fill(pass);
    await page.getByRole("button", { name:"Log In"}).click();
    await page.getByRole("link", { name:"Bill Pay"}).click();

    await expect(page.getByRole("heading", { name:"Bill Payment Service"})).toBeVisible();
    await expect(page.getByText("Enter payee information")).toBeVisible();

    await page.locator("//input[@name='payee.name']").fill("John Doe");
    await page.locator("//input[@name='payee.address.street']").fill("RandomAdress123");
    await page.locator("//input[@name='payee.address.city']").fill("RandomCity");
    await page.locator("//input[@name='payee.address.state']").fill("RandomState");
    await page.locator("//input[@name='payee.address.zipCode']").fill("987654321");
    await page.locator("//input[@name='payee.phoneNumber']").fill("+1 2018630134");
    await page.locator("//input[@name='payee.accountNumber']").fill("15231");
    await page.locator("//input[@name='verifyAccount']").fill("15231");
    await page.locator("//input[@name='amount']").fill("200");
    await page.locator("//input[@value='Send Payment']").click();

    await expect(page.getByRole("heading", { name:"Bill Payment Complete"})).toBeVisible();
})

test("Verify find transactions by date", async({ page }) => {

   const userName = "sunny1234"; 
   const pass = "8aPpL3@tMOnE!";

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");

   const username = page.locator("//input[@type='text']");
   const password = page.locator("//input[@type='password']");

   await username.fill(userName);
   await password.fill(pass);
   await page.getByRole("button", { name:"Log In"}).click();
   await page.getByRole("link", { name:"Find Transactions"}).click();

   await expect(page.getByRole("heading", {name:"Find Transactions"})).toBeVisible();
   const accountChoice = page.locator("//select[@id='accountId']");
   await accountChoice.selectOption({ index: 0});
   const transactionDate = page.locator("//*[@id='transactionDate']");
   await transactionDate.fill("06-05-2025");
   await page.getByRole("button", { name:"Find Transactions"}).nth(1).click();
   await expect(page.getByRole("heading", { name:"Transaction Results"})).toBeVisible();
   await expect(page.locator("//table[@id='transactionTable']")).toBeVisible();
   await page.getByRole("link", { name:"Bill Payment to John Doe"}).click();
   await expect(page.getByRole("heading", { name:"Transaction Details"})).toBeVisible();
   await expect(page.getByText("Transaction ID:")).toBeVisible();
   await expect(page.getByText("Date:")).toBeVisible();
   await expect(page.getByText("Description:")).toBeVisible();
   await expect(page.getByText("Type:")).toBeVisible();
   await expect(page.getByText("Amount:")).toBeVisible();
})

test("Verify find transactions by ammount", async({ page }) => {

   const userName = "sunny1234"; 
   const pass = "8aPpL3@tMOnE!";

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");

   const username = page.locator("//input[@type='text']");
   const password = page.locator("//input[@type='password']");

   await username.fill(userName);
   await password.fill(pass);
   await page.getByRole("button", { name:"Log In"}).click();
   await page.getByRole("link", { name:"Find Transactions"}).click();

   await expect(page.getByRole("heading", {name:"Find Transactions"})).toBeVisible();
   const accountChoice = page.locator("//select[@id='accountId']");
   await accountChoice.selectOption({ index: 0});
   const transactionDate = page.locator("//input[@id='amount']");
   await transactionDate.fill("100");
   await page.getByRole("button", { name:"Find Transactions"}).nth(3).click();
   await expect(page.getByRole("heading", { name:"Transaction Results"})).toBeVisible();
   await expect(page.locator("//table[@id='transactionTable']")).toBeVisible();
   await page.getByRole("link", { name:"Bill Payment to John Doe"}).click();
   await expect(page.getByRole("heading", { name:"Transaction Details"})).toBeVisible();
   await expect(page.getByText("Transaction ID:")).toBeVisible();
   await expect(page.getByText("Date:")).toBeVisible();
   await expect(page.getByText("Description:")).toBeVisible();
   await expect(page.getByText("Type:")).toBeVisible();
   await expect(page.getByText("Amount:")).toBeVisible();
})

test("Verfiy find transactions by transaction id", async({ page }) => {

   const userName = "sunny1234"; 
   const pass = "8aPpL3@tMOnE!";

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");

   const username = page.locator("//input[@type='text']");
   const password = page.locator("//input[@type='password']");

   await username.fill(userName);
   await password.fill(pass);
   await page.getByRole("button", { name:"Log In"}).click();
   await page.getByRole("link", { name:"Find Transactions"}).click();

   await page.locator("//input[@id='transactionId']").fill("18694");
   await page.locator("//button[@id='findById']").click();
})

test("Verify find transactions by date range", async({ page }) => {

   const userName = "sunny1234"; 
   const pass = "8aPpL3@tMOnE!";

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");

   const username = page.locator("//input[@type='text']");
   const password = page.locator("//input[@type='password']");

   await username.fill(userName);
   await password.fill(pass);
   await page.getByRole("button", { name:"Log In"}).click();
   await page.getByRole("link", { name:"Find Transactions"}).click();

   await expect(page.getByText("Find by Date Range")).toBeVisible();
   await page.locator("//input[@id='fromDate']").fill("06-09-2025");
   await page.locator("//input[@id='toDate']").fill("06-10-2025");

   await page.locator("//button[@id='findByDateRange']").click();
})

test("Request a loan", async({ page }) => {

   const userName = "sunny1234"; 
   const pass = "8aPpL3@tMOnE!";

   await page.goto("https://parabank.parasoft.com/parabank/index.htm");

   const username = page.locator("//input[@type='text']");
   const password = page.locator("//input[@type='password']");

   await username.fill(userName);
   await password.fill(pass);
   await page.getByRole("button", { name:"Log In"}).click();
   
   await page.getByRole("link", { name:"Request Loan"}).click();
   await expect(page.getByRole("heading", { name:"Apply for a Loan"})).toBeVisible();
   await page.locator("//input[@id='amount']").fill("200");
   await page.locator("//input[@id='downPayment']").fill("50");
   await page.locator("//select[@id='fromAccountId']").selectOption({ index: 0});
   await page.getByRole("button", { name:"Apply Now"}).click();
   await expect(page.getByText("Loan Provider: ")).toBeVisible();
   await expect(page.getByText("Date: ")).toBeVisible();
   await expect(page.getByText("Status: ")).toBeVisible();
   await expect(page.getByRole("heading", { name:"Loan Request Processed"})).toBeVisible();
   await expect(page.getByText("Your new account number:")).toBeVisible();
}) 

