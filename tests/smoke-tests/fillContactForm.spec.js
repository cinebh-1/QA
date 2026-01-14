import { test } from '../../fixtures/pomFixtures.js';

test("User can submit contact form with mandatory data - positive", async({ contactPage }) => {

    // contact page methods
    await contactPage.goto();
    await contactPage.fillContactForm();
    await contactPage.submitForm();
    await contactPage.checkContactFormSuccessMessage();
});

test("User can't submit form without mandatory data - negative", async({ contactPage }) => {

    await contactPage.goto();
    await contactPage.fillIncompleteContactForm();
    await contactPage.submitForm();
    await contactPage.firstNameMissingErrorIsVisible();
    await contactPage.lastNameMissingErrorIsVisible();
});