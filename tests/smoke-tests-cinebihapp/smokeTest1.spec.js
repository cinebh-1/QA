import { test } from '../../fixtures/pomFixtures.js';

test('User can sign in with valid Cinebh account', async({ homePage }) => {

    // Prerequisites: Docker must be launched before test can run 

    await homePage.gotoCinebhHomePage();
    await homePage.clickSignInButton1();
    await homePage.fillCineBhEmail();
    await homePage.fillCineBhPassword();
    await homePage.clickSignInButton2();
    await homePage.usernameIsVisible();
});

