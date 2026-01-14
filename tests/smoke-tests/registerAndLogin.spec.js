import { test } from '../../fixtures/pomFixtures.js';

test('User can register and login', async({ registrationPage, loginPage }) => {

    // registration page methods
    await registrationPage.goto();
    await registrationPage.fillRegistrationForm();
    await registrationPage.submitForm();

    // login page methods
    await loginPage.goto();
    await loginPage.fillLoginForm();
    await loginPage.submitForm();
    await loginPage.usernameIsVisible();
});



