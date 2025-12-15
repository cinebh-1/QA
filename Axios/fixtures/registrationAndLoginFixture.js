import {test as base} from '@playwright/test';
import { RegistrationPage } from '../pages/registrationPage.js';
import { LoginPage } from '../pages/loginPage.js';


export const test = base.extend({
    registrationPage: async({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
    loginPage: async({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
});



