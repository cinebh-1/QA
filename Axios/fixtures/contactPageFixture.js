import {test as base} from '@playwright/test';
import { ContactPage } from './../pages/contactPage.js'

export const test = base.extend({
    contactPage: async({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    }
});