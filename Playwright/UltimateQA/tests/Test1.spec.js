const {test, expect} = require('@playwright/test');
const { error } = require('console');
const { title } = require('process');
const { promiseHooks } = require('v8');

test("Section of buttons", async({ page }) => {

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Big page with many elements"}).click();
  await expect(page.getByRole("heading", { name:"Section of Buttons"})).toBeVisible(); 

  for (var i = 0; i < 12;) { 
    await page.getByRole("link", { name:"Button"}).nth(i).click();
    i++;
  }
})

test("Section of Social Media Follows", async({ page }) => {

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Big page with many elements"}).click(); 
  await expect(page.getByRole("heading", { name:"Section of Social Media Follows"})).toBeVisible();

  //testing Twitter pages 
  for (var i = 0; i < 5;) { 
    await page.getByTitle("Follow on Twitter").nth(i).click();
    await page.waitForTimeout(2500);
    await page.goBack();
    i++;
  }

  //testing Facebook pages
  for (var i = 0; i < 5;) { 
    await page.getByTitle("Follow on Facebook").nth(i).click();
    await page.waitForTimeout(2500);
    await page.goBack();
    i++;
  }
})

test("Section of Random Stuff", async({ page }) => {

  test.setTimeout(120_000);

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Big page with many elements"}).click(); 
  await expect(page.getByRole("heading", { name:"Section of Random Stuff"})).toBeVisible();

  // filling out first form
  await page.locator("//input[@id='et_pb_contact_name_0']").fill("John Doe");
  await page.waitForTimeout(1500);
  await page.locator("(//input[@id='et_pb_contact_email_0'])[1]").fill("Example123@gmail.com");  
  await page.waitForTimeout(1500);
  await page.locator("//textarea[@id='et_pb_contact_message_0']").fill("How are you today?");
  await page.waitForTimeout(1500);
  await page.locator("(//input[@name='et_pb_contact_captcha_0'])[1]").fill("14");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name:"Submit"}).nth(0).click();

  // filling out first login form
  await page.getByPlaceholder("Username").nth(0).fill("John Doe");
  await page.waitForTimeout(1500);
  //email address
  await page.getByPlaceholder("Password").nth(0).fill("Example12345@yahoo.com");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name:"Login"}).nth(0).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.locator("//span[@id='A_toggle']").click();
  await expect(page.getByText("Inside of toggle")).toBeVisible();    
}) 

test("Section of Random Stuff 2", async({ page }) => {

  test.setTimeout(120_000);

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Big page with many elements"}).click(); 
  await expect(page.getByRole("heading", { name:"Section of Random Stuff"})).toBeVisible();

  //filling out second form 
  await page.locator("//input[@id='et_pb_contact_name_1']").fill("James Holmes");
  await page.waitForTimeout(1500);
  await page.locator("//input[@id='et_pb_contact_email_1']").fill("Example123@gmail.com");  
  await page.waitForTimeout(1500);
  await page.locator("//textarea[@id='et_pb_contact_message_1']").fill("Some random text");
  await page.waitForTimeout(1500);
  await page.locator("//input[@name='et_pb_contact_captcha_1']").fill("16");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name:"Submit"}).nth(1).click();

  //filling out second login form 
  await page.getByPlaceholder("Username").nth(1).fill("JamesHolmes1983");
  await page.waitForTimeout(1500);
  await page.getByPlaceholder("Password").nth(1).fill("Example12345@yahoo.com");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name:"Login"}).nth(1).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.locator("//span[@id='A_toggle']").click();
  await expect(page.getByText("Inside of toggle")).toBeVisible();  
})

test("Section of Random Stuff 3", async({ page }) => {

  test.setTimeout(120_000);

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Big page with many elements"}).click(); 
  await expect(page.getByRole("heading", { name:"Section of Random Stuff"})).toBeVisible();

  //filling out second form 
  await page.locator("//input[@id='et_pb_contact_name_2']").fill("Will Smith");
  await page.waitForTimeout(1500);
  await page.locator("//input[@id='et_pb_contact_email_2']").fill("WillSmith_324@gmail.com");  
  await page.waitForTimeout(1500);
  await page.locator("//textarea[@id='et_pb_contact_message_2']").fill("Some random text");
  await page.waitForTimeout(1500);
  await page.locator("//input[@name='et_pb_contact_captcha_2']").fill("16");
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name:"Submit"}).nth(2).click();
})

test("Verify webpage layout", async({ page }) => {

  test.setTimeout(120_000);
  await page.goto("https://ultimateqa.com/fake-landing-page");
  await expect(page.getByRole("heading", { name:"Learn to Code Websites, Apps & Games"})).toBeVisible();
  await expect(page.getByText("View Courses")).toBeVisible();
  await page.getByRole("link", { name:"View Courses"}).click();
  await expect(page.getByText("Web Development")).toBeVisible();
  await expect(page.getByText("Python")).toBeVisible();
  await expect(page.getByText("UX Design")).toBeVisible();
  await expect(page.getByText("Database Design")).toBeVisible();
  await expect(page.getByText("Javascript")).toBeVisible();
  await expect(page.getByText("HTML & CSS")).toBeVisible();
  await expect(page.getByText("Intro to Coding")).toBeVisible();
  await expect(page.getByText("Apps & Games").nth(1)).toBeVisible();
})

test("Verify navbar section links", async({ page }) => {

  test.setTimeout(120_000);
  await page.goto("https://ultimateqa.com/fake-landing-page#");
  await page.getByRole("link", { name:"Services"}).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"About"}).nth(0).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"Blog"}).nth(0).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"Newsletter"}).click();
  await page.waitForTimeout(3000);
  await page.goBack();
  await page.getByRole("link", { name:"Education"}).click();
})

test("Verify education link sub menu", async({ page }) => {

  test.setTimeout(120_000);
  await page.goto("https://ultimateqa.com/fake-landing-page#");
  await page.getByRole("link", { name:"Education"}).click();
  await page.waitForTimeout(2000);
  await page.getByRole("link", { name:"Free Courses"}).nth(0).click();
  await page.waitForTimeout(2000);
  await page.goBack();
  await page.getByRole("link", { name:"Education"}).click();
  await page.waitForTimeout(1200);
  await page.getByRole("link", { name:"Selenium Java"}).nth(0).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"Selenium C#"}).nth(0).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"Selenium Resources"}).click();
  await page.waitForTimeout(1500);
  await page.goBack();
  await page.getByRole("link", { name:"Automation Exercises"}).click();
  await page.waitForTimeout(1500);
  await page.getByRole("link", { name:"Java SDET Academy"}).click();
  await page.goBack();
})

test("Verify search is working", async({ page }) => {

  await page.goto("https://ultimateqa.com/fake-landing-page#");
  await page.getByRole("button", { name:"U"}).click();
  await page.getByPlaceholder("Search …").fill("Java");
  await page.getByPlaceholder("Search …").press("Enter");
})

test("Fill DISCOVERY SESSION form", async({ page }) => {

  await page.goto("https://ultimateqa.com/fake-landing-page#");
  await page.getByRole("link", { name:"I want a free DISCOVERY SESSION"}).click();
  await page.getByPlaceholder("Enter text").nth(0).fill("John Doe");
  await page.getByPlaceholder("Enter email").fill("johndoe_987@gmail.com");
  await page.getByPlaceholder("Enter text").nth(1).fill("QA");
  await page.getByPlaceholder("Enter text").nth(2).fill("King Testers");
  await page.getByRole("button", { name:"Select option..."}).click();
  await page.getByText("Framework assessment and review").click();
  await page.getByRole("textbox", { name:"Message"}).fill("Hi how are you today?");
  await page.getByRole("button", { name:"Submit"}).click();
})

test("Verify price plans exist and you can click on them", async({ page }) => {

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Fake Pricing Page"}).click();
  await page.waitForTimeout(1200);
  await expect(page.getByText("Pick a Plan that Works for Your Business Model")).toBeVisible();
  await expect(page.getByText("These are the best plans amongst all companies in the world.")).toBeVisible();
  await page.waitForTimeout(1200);
  //purchase button
  const buttons = page.locator('a:has-text("Purchase")');
  //number of buttons present 
  const count = await buttons.count();

  //click all purchase buttons in order
  for (let i = 0; i < count;) { 
    await buttons.nth(i).click();
    await page.waitForTimeout(800);
    i++;
  }
})

test("Verify footer section - Linkedin ", async({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ultimateqa.com/");

    await page.locator("//a[@title='Follow on LinkedIn']").click();
    const [newPage] = await Promise.all([
        context.waitForEvent("page")
    ])

    newPage.locator("//button[@aria-label='Dismiss']").nth(0).click();
    await newPage.waitForTimeout(2000);
    await newPage.getByRole("button", { name:"Reject"}).click();
    await newPage.waitForTimeout(2000);
})

test("Verify footer section - Twitter(X)", async({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ultimateqa.com/");

    await page.locator("//a[@title='Follow on X']").click();
  
    const [newPage] = await Promise.all([
        context.waitForEvent("page")
    ])
    
    await newPage.getByText("Refuse non-essential cookies").click();
    await newPage.waitForTimeout(2000);
})

test("Verify footer section - Facebook", async({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ultimateqa.com/");

    await page.locator("//a[@title='Follow on Facebook']").click();

    const [newPage] = await Promise.all([
        context.waitForEvent("page")
    ])

    const element = newPage.locator("//div[@aria-label='Decline optional cookies']").nth(0);
    //obtain coordinates of web element
    const box = await element.boundingBox();
    //store coordinates of web element 
    var x = box.x, y = box.y;
    await newPage.mouse.click(x, y);
    await newPage.locator("//div[@aria-label='Close']").click();
})

test("Verify footer section - YouTube", async({ browser }) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://ultimateqa.com/");

  await page.locator("//ul/li/a[@title='Follow on Youtube']").click();

  const [newPage] = await Promise.all([
    context.waitForEvent("page")
  ])

  await newPage.locator("//button[@aria-label='Reject all']").nth(0).click();
})

test("App that evolves over time", async({ page }) => {

  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name:"Learn how to automate an application that evolves over time"}).click();
  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Sprint 1"})).toBeVisible();
  await page.locator("//input[@name='firstname']").fill("John");
  await page.getByRole("link", { name:"Go to the next sprint"}).click();

  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Sprint 2"})).toBeVisible();
  await page.locator("//input[@name='firstname']").fill("John");
  await page.locator("//input[@name='lastname']").fill("Doe");
  await page.getByRole("link", { name:"Go to sprint 3"}).click();

  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Sprint 3"})).toBeVisible();
  await page.locator("input[type='radio'][value='female']").click();
  await page.locator("//input[@name='firstname']").fill("Jenna");
  await page.locator("//input[@name='lastname']").fill("Haze");

  await page.locator("input[type='radio'][value='other']").click();
  await page.locator("//input[@name='firstname']").fill("Dorothy");
  await page.locator("//input[@name='lastname']").fill("Lindon");

  await page.locator("input[type='radio'][value='male']").click();
  await page.locator("//input[@name='firstname']").fill("Linda");
  await page.locator("//input[@name='lastname']").fill("Connor");
  await page.getByRole("link", {name:"Go to sprint 4"}).click();
  
  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Sprint 4"})).toBeVisible();
  await page.locator("input[type='radio'][value='male']").nth(0).click();
  await page.locator("//input[@name='firstname']").nth(0).fill("James");
  await page.locator("//input[@name='lastname']").nth(0).fill("McCane");
 
  await page.locator("input[type='radio'][value='female']").nth(1).click();
  await page.locator("//input[@name='firstname']").nth(1).fill("Heather");
  await page.locator("//input[@name='lastname']").nth(1).fill("McCane");
  await page.getByRole("link", { name:"Go to sprint 5"}).click();

  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Sprint 5"})).toBeVisible();
  await page.locator("input[type='radio'][value='other']").nth(0).click();
  await page.locator("//input[@name='firstname']").nth(0).fill("James");
  await page.locator("//input[@name='lastname']").nth(0).fill("McCane");

  await page.locator("input[type='radio'][value='female']").nth(1).click();
  await page.locator("//input[@name='firstname']").nth(1).fill("Eva");
  await page.locator("//input[@name='lastname']").nth(1).fill("Morris");
  await page.locator("(//input[@id='submit2'])").click();

  await expect(page.getByRole("heading", { name:"Sample Application Lifecycle – Form Page 2"})).toBeVisible();
  await page.locator("input[type='radio'][value='crocodiles']").click();
  await page.getByRole("button", { name:"Submit"}).click();
})

test("Login automation - create account", async({ page }) => {

  await page.goto("https://ultimateqa.com/automation/");
  await page.getByRole("link", { name:"Login automation"}).click();
  await page.getByRole("link", { name:"Create a new account"}).click();
  await page.getByPlaceholder("First name").fill("Lebron");
  await page.getByPlaceholder("Last Name").fill("James");
  await page.getByPlaceholder("Email").fill("LebronJames123@example.com");
  await page.getByPlaceholder("New password").fill("12345678");
  await page.getByRole("checkbox").check();
  //await page.screenshot("results.png")
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name:"Sign Up"}).click();
  await page.getByRole("link", { name:"My Dashboard"}).click();
})






