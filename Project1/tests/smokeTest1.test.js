// tests/contactForm.spec.js
import {test, expect} from ('../utils/fixtures/contactFixture');

test('User can fill out contact form successfully', async ({ contactPage }) => {
  // Step 1: Navigate to homepage
  await contactPage.openHomePage();

  // Step 2: Check if Contact button is visible
  const isVisible = await contactPage.isElementVisible(contactPage.selectors.contactButton);
  expect(isVisible).toBeTruthy();

  // Step 3: Go to Contact form
  await contactPage.goToContactForm();

  // Step 4: Fill out form with env variables
  await contactPage.fillContactForm();

  // Step 5: Select subject from dropdown
  await contactPage.selectSubject();

  // Step 6: Submit form
  await contactPage.submitForm();

  // Step 7: Verify success message
  await expect(contactPage.getSuccessMessageLocator()).toHaveText(contactPage.successText);
});


