import { test } from '../../fixtures/registrationAndLoginFixture.js';

test('User can register and login', async({ registrationPage, loginPage }) => {

    await registrationPage.goto();
    await registrationPage.fillRegistrationForm();
    await registrationPage.submitForm();

    await loginPage.goto();
    await loginPage.fillLoginForm();
    await loginPage.submitForm();

    await loginPage.usernameIsVisible();
});



