import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage.js';

test('User can fill and send contact form', async({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.goto();
    await contactPage.fillContactForm();
    await contactPage.submitForm();

   /*  const successText = await contactPage.getSuccessMessage();
    expect(successText).toContain(successText); */
});