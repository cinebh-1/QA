import { expect } from '@playwright/test';
import { test } from './../../fixtures/contactPageFixture.js';

test('User can submit form', async({ contactPage }) => {
    await contactPage.goto();
    await contactPage.fillContactForm();
    await contactPage.submitForm();

    await expect(contactPage.successText).toContain(contactPage.successText);
});