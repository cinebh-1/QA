import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../pages/registrationPage.js';
import { LoginPage } from '../../pages/loginPage.js';

test('User can register and login', async({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);

    await registrationPage.gotoRegisterPage();
    await registrationPage.fillRegistrationForm();
    await registrationPage.submitForm();

    await loginPage.gotoLoginPage();
    await loginPage.fillLoginForm();
    await loginPage.submitForm(); 
    
    const visible = await loginPage.isVisible();
    expect(visible).toBe(true);
});   
