import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage.js';
import { LoginPage } from '../pages/loginPage.js';


test('User can fill and send contact form', async({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    await registrationPage.goto();
    await registrationPage.fillRegistrationForm();
    await registrationPage.submitForm();

    await loginPage.goto();
    await loginPage.fillLoginForm();
    await loginPage.submitForm();
});
