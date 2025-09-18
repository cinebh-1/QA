const {test, expect} = require('@playwright/test');

test("Verify user can log in", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();
   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();
})

test("Verify user can add single item to cart", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //first item on webpage
   var itemNumber = 0; 
   await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});

   await expect(page.getByRole("heading", { name:"SHOPPING CART"})).toBeVisible();
   await expect(page.getByText("ITEM")).toBeVisible();
   await expect(page.getByText("PRICE")).toBeVisible();
   await expect(page.getByText("QUANTITY")).toBeVisible();
   await expect(page.getByText("Total")).toBeVisible();
   await page.getByRole("button", { name:"PROCEED TO CHECKOUT"}).click();

   await expect(page.getByRole("heading", { name:"Shipping Details"})).toBeVisible();
   await page.getByPlaceholder("Enter phone number").fill("+1 2013216765");
   await page.getByPlaceholder("5876 Little Streets").fill("8765 King George St");
   await page.getByPlaceholder("London").fill("Toronto");
   const countriesList = page.locator("//select[@id='countries_dropdown_menu']");
   await countriesList.selectOption({ value:"Canada"});
   await page.getByRole("button", { name:"Submit Order"}).click();
   await expect(page.locator("//div[@id='message']")).toBeVisible();
})

test("Verify user can add multiple items to cart", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();
   //logging in 
   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //button clicking in order of occurence
   var i = 0;
   while(i < 5) { 
      await page.locator("button:has-text('ADD TO CART')").nth(i++).click({ delay:3000});
      await page.locator("button:has-text('ADD TO CART')").nth(i++).click({ delay:3000});
      await page.locator("button:has-text('ADD TO CART')").nth(i++).click({ delay:3000});
      await page.locator("button:has-text('ADD TO CART')").nth(i++).click({ delay:3000});
      await page.locator("button:has-text('ADD TO CART')").nth(i++).click({ delay:3000});
   }

   //checkout page 
   await page.getByRole("button", { name:"PROCEED TO CHECKOUT"}).click();
   await expect(page.getByRole("heading", { name:"Shipping Details"})).toBeVisible();
   await page.getByPlaceholder("Enter phone number").fill("+1 2013216765");
   await page.getByPlaceholder("5876 Little Streets").fill("8765 King George St");
   await page.getByPlaceholder("London").fill("Toronto");
   const countriesList = page.locator("//select[@id='countries_dropdown_menu']");
   await countriesList.selectOption({ value:"Canada"});

   //submitting order 
   await page.getByRole("button", { name:"Submit Order"}).click();
   await expect(page.locator("//div[@id='message']")).toBeVisible(); 
})

test("Verify user can select quantity of single product", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   //login
   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //buy first item in list 
   await page.locator("button:has-text('ADD TO CART')").nth(0).click({ delay:3000});

   const qtyOfProduct = page.locator("//input[@class='cart-quantity-input']");
   // set quantity of product to 2
   await qtyOfProduct.fill("2");
})

test("Verify user can select quantity of multiple products", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   //login
   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //buy first item in list 
   await page.locator("button:has-text('ADD TO CART')").nth(0).click({ delay:3000});
   //buy second item in list 
   await page.locator("button:has-text('ADD TO CART')").nth(1).click({ delay:3000});

   const qtyOfProduct = page.locator("//input[@class='cart-quantity-input']");
   var itemNumber = 0;
   //set quantity of first product in cart
   await qtyOfProduct.nth(itemNumber).fill("2");
   itemNumber++;
   //set quantity of second product in cart
   await qtyOfProduct.nth(itemNumber).fill("2");
   await expect(qtyOfProduct).toHaveCount(2);
   await expect(qtyOfProduct).toHaveCount(2);
})

test("Verify user can remove single item from cart", async({ page }) => {
   
   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   //login
   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //adding and removing item
   var itemNumber = 0; //first item on webpage
   //buy first item on webpage
   await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});
   //itemNumber++;
   //await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});

   await page.getByRole("button", { name:"REMOVE"}).click();
})

test("Verify user can remove multiple items from cart", async({ page }) => {

   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   //add first two items to cart
   var itemNumber = 0; 
   await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});
   itemNumber++;
   await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});

   //remove added items
   await page.locator("button:has-text('REMOVE')").nth(itemNumber).click({ delay:3000});
   itemNumber--;
   await page.locator("button:has-text('REMOVE')").nth(itemNumber).click({ delay:3000});
})

test("Verify missing shipping details alert", async({ page }) => {


   await page.goto("https://qa-practice.netlify.app/");
   await page.getByRole("link", { name:"Forms"}).click();
   const loginLink = page.locator("//a[@id='login']");
   await loginLink.click();

   await page.getByPlaceholder("Enter email - insert admin@admin.com").fill("admin@admin.com");
   await page.getByPlaceholder("Enter Password - insert admin123").fill("admin123");
   await page.getByRole("button", { name:"Submit"}).click();

   var itemNumber = 0; 
   await page.locator("button:has-text('ADD TO CART')").nth(itemNumber).click({ delay:3000});
   await page.getByRole("button", { name:"PROCEED TO CHECKOUT"}).click();

   await page.getByRole("button", { name:"Submit Order"}).click();
})




