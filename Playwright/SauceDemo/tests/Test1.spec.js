const {test, expect} = require("@playwright/test");
const miliSecondsTimeout = 2000;

test("Verify home page UI elements", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button", { name:"LOGIN"})).toBeVisible();
    await expect(page.locator("css=.login_logo")).toBeVisible();
    await expect(page.locator("css=.bot_column")).toBeVisible();
    await expect(page.locator("css=.login_credentials_wrap")).toBeVisible();
})

test("Verify succesfull login", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN"}).click();

    await page.waitForURL("https://www.saucedemo.com/v1/inventory.html");
    console.log("Redirect successful!");
})

test("Verify logout button is present", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN"}).click();

    const message = page.locator("//div[@class='product_label']");
    await expect(message).toBeVisible();
    const burgerMenu = page.locator("//div[@class='bm-burger-button']");
    await burgerMenu.click();
    const logoutButton = page.locator("//a[@id='logout_sidebar_link']");
    await expect(logoutButton).toBeVisible();
})

test("Verify user cannot login with wrong username", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Username").fill("standard_use");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN"}).click();
    await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
})

test("Verify user cannot login with wrong password", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauc");
    await page.getByRole("button", { name: "LOGIN"}).click();
    await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
})

test("Verify user cannot login if username is missing", async({page}) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN"}).click();
    await expect(page.getByText("Epic sadface: Username is required")).toBeVisible();
})

test("Verify user cannot login if password is missing", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByRole("button", { name: "LOGIN"}).click();
    await expect(page.getByText("Epic sadface: Password is required")).toBeVisible();
})

test("Check if password field is masked", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    const passwordField = await page.locator("#password"); // Replace with actual selector
    const typeAttribute = await passwordField.getAttribute('type');
    await page.getByPlaceholder("Password").fill("secret_sauce");

    if (typeAttribute === 'password') 
        console.log('Password is masked.');
    else 
        console.log('Password is not masked.');
})

test("Verify user can login via ENTER button", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    const loginButton = await page.locator("#login-button");
    await loginButton.press("Enter");
})

test("Login and buy one item", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', { name:'LOGIN'}).click();

    await page.locator("xpath=//*[@class='inventory_item']")
    .filter({ hasText:"Sauce Labs Backpack"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();
})

test("Login, add multiple items to cart and check out", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', { name:'LOGIN'}).click();

    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText:"Sauce Labs Bolt T-Shirt"})
    .getByRole("button", { name:"ADD TO CART"})
    .click();

    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText:"Sauce Labs Backpack"})
    .getByRole("button")
    .click();

    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText: "Sauce Labs Onesie"})
    .getByRole("button")
    .click();

    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText: "Sauce Labs Bike Light"})
    .getByRole("button")
    .click();
    
    await page
    .locator("xpath=//div[@id='shopping_cart_container']")
    .getByRole("link")
    .click();

    await page
    .getByRole("link", { name:"CHECKOUT"})
    .click();

    await page
    .getByPlaceholder("First Name")
    .fill("John");

    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.getByPlaceholder("Zip/Postal Code").fill("28362");
    await page.getByRole("button", { name: "CONTINUE" }).click();
    await page.getByRole("link", { name:"FINISH"}).click();

    await expect(page.locator("xpath=//div[@class='subheader']")).toBeVisible();
}) 

test("Login, add item to cart and remove it", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("button", { name:"LOGIN"}).click();
    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText:"Sauce Labs Backpack"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page
    .locator("xpath=//div[@id='shopping_cart_container']")
    .getByRole("link")
    .click();

    await page.getByRole("button", { name:"REMOVE"}).click();
    await page.waitForTimeout(miliSecondsTimeout);
})

test("Login, add item to cart and check if Your Cart contains neccessary info", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "LOGIN"}).click();

    await page
    .locator("xpath=//*[@class='inventory_item']")
    .filter({hasText:"Sauce Labs Bike Light"})
    .getByRole("button", {name: "ADD TO CART"})
    .click();

    await page
    .locator("css=#shopping_cart_container")
    .getByRole("link")
    .click();
    
   await expect(page
        .locator("xpath=//div[@class='header_label']"))
        .toBeVisible(); 

    await expect(page
        .locator("xpath=//button[normalize-space()='Open Menu']"))
        .toBeVisible();

    await expect(page.locator("xpath=//div[@class='subheader']")).toBeVisible(); // Your Cart text
    await expect(page.getByText("QTY")).toBeVisible();
    await expect(page.getByText("DESCRIPTION")).toBeVisible();

    await expect(page.getByRole("link", { name:"Continue Shopping"})).toBeVisible();
    await expect(page.getByRole("link", { name:"CHECKOUT"})).toBeVisible();

    //await expect(page.locator("css=.cart_quantity")).toBeVisible();
    //await expect(page.locator("css=.cart_desc_label")).toBeVisible();
})

test("Login, add item to cart and remove item from cart", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("button", { name:"LOGIN"}).click();

    await page
    .locator("xpath = //div[@class='inventory_item']")
    .filter({ hasText:"Test.allTheThings() T-Shirt (Red)"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page
    .locator("xpath=//div[@id='shopping_cart_container']")
    .getByRole("link")
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("button", { name:"REMOVE"}).click();
})

test("Test hamburger menu", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(miliSecondsTimeout);
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(miliSecondsTimeout);
    await page.getByRole("button", { name:"LOGIN"}).click();

    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.locator("xpath=//div[@class='bm-burger-button']").click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("link", { name:"All Items"}).click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.goto("https://www.saucedemo.com/v1/inventory.html");

    await page.locator("xpath=//div[@class='bm-burger-button']").click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("link", { name:"About"}).click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.goto("https://www.saucedemo.com/v1/inventory.html");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.locator("xpath=//div[@class='bm-burger-button']").click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("link", { name:"Logout"}).click();
    await page.waitForTimeout(miliSecondsTimeout);
})

test("Add and remove multiple items from cart and continue shopping", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("button", { name: "LOGIN"}).click();

    await page
    .locator("xpath = //div[@class='inventory_item']")
    .filter({ hasText:"Test.allTheThings() T-Shirt (Red)"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page
    .locator("xpath = //div[@class='inventory_item']")
    .filter({ hasText:"Sauce Labs Fleece Jacket"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page
    .locator("xpath=//div[@class='inventory_item']")
    .filter({ hasText:"Sauce Labs Backpack"})
    .getByRole("button", { name: "ADD TO CART"})
    .click();

    await page
    .locator("xpath=//div[@id='shopping_cart_container']")
    .getByRole("link")
    .click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.locator(':nth-match(:text("REMOVE"), 3)').click();
    await page.waitForTimeout(miliSecondsTimeout);
    await page.locator(':nth-match(:text("REMOVE"), 2)').click();
    await page.waitForTimeout(miliSecondsTimeout);
    await page.locator(':nth-match(:text("REMOVE"), 1)').click();
    await page.waitForTimeout(miliSecondsTimeout);

    await page.getByRole("link", { name:"Continue Shopping"}).click();
})

test("Test dropdown menu when logged in", async({ page }) => {

    test.slow();
    await page.goto("https://www.saucedemo.com/v1");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole('button', {name:'LOGIN'}).click();
    await page.locator("//*[@class='product_sort_container']").selectOption({label:"Name (A to Z)"});
    //await page.locator("//*[@class='product_sort_container']").selectOption({value:"za"});
    await page.waitForTimeout(miliSecondsTimeout);
    await page.locator("//*[@class='product_sort_container']").selectOption({label:"Name (Z to A)"});
    await page.waitForTimeout(miliSecondsTimeout);
    //await page.locator("//*[@class='product_sort_container']").selectOption({value:"az"});
    await page.locator("//*[@class='product_sort_container']").selectOption({label:"Price (low to high)"});
    //await page.locator("//*[@class='product_sort_container']").selectOption({value:"lohi"});
    await page.waitForTimeout(miliSecondsTimeout);
    await page.locator("//*[@class='product_sort_container']").selectOption({label:"Price (high to low)"});
    //await page.locator("//*[@class='product_sort_container']").selectOption({value:"hilo"});
})

test("Verify Checkout:Overview page UI elements", async({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name:"LOGIN"}).click();
    const inventoryItem = page.locator(".inventory_item");
    await inventoryItem
    .filter({ hasText:"Sauce Labs Backpack"})
    .getByRole("button", {name:"ADD TO CART"})
    .click();
    const cartButton = page.locator("#shopping_cart_container");
    await cartButton.getByRole("link").click();
    
    await page.getByRole("link", { name:"CHECKOUT"}).click();

    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.getByPlaceholder("Zip/Postal Code").fill("28362");
    await page.getByRole("button", { name: "CONTINUE" }).click();

    const quantity = page.locator("//div[@class='cart_quantity_label']"); // how much items are in cart 
    await expect(quantity).toBeVisible();

    const description = page.locator("//div[@class='cart_desc_label']"); // description of cart item
    await expect(description).toBeVisible();

    const productLink = page.locator("//div[@class='inventory_item_name']"); // link to prodcut 
    await productLink.click();

    await page.getByRole("button", { name:"Back"}).click();
    
    const itemPrice = page.locator("//div[@class='inventory_item_price']");
    await expect(itemPrice).toBeVisible();

    const summaryInfo = page.locator("//div[@class='summary_info_label']");
    await expect(summaryInfo.filter({ hasText:"Payment Information:"})).toBeVisible();
    await expect(summaryInfo.filter({ hasText:"Shipping Information:"})).toBeVisible();
    
    const itemTotal = page.locator("//div[@class='summary_subtotal_label']");
    await expect(itemTotal).toBeVisible();
    const tax = page.locator("//div[@class='summary_tax_label']");
    await expect(tax).toBeVisible();
    const total = page.locator("//div[@class='summary_total_label']");
    await expect(total).toBeVisible();
})
