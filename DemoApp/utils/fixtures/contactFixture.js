import{ test as base } from ('@playwright/test'); 
import ContactPage  from ('../../pages/contactPage');

exports.test = base.extend({
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    }
});

export const expect = base.expect;