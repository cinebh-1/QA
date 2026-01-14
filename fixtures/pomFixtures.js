import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';
import { RegistrationPage } from '../pages/registrationPage.js';
import { LoginPage } from '../pages/loginPage.js';
import { ContactPage } from '../pages/contactPage.js';


export const test = base.extend({
    
    homePage: async({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    checkoutPage: async({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);        
    },

    registrationPage: async({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },

    loginPage: async({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }, 

    contactPage: async({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    }
});