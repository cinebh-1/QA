const {test, expect} = require('@playwright/test');
const BasePage = require('../pages/basePage');
const selectors = require('../utils/contactPageSelectors');
require ('dotenv').config();

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.selectors = selectors;
    // Environment variables
    this.baseUrl = process.env.BASE_URL;
    this.firstName = process.env.CONTACT_FIRST_NAME;
    this.lastName = process.env.CONTACT_LAST_NAME;
    this.email = process.env.CONTACT_EMAIL_ADDRESS;
    this.subjectMessage = process.env.CONTACT_MESSAGE;
    this.subject = process.env.CONTACT_SUBJECT;
    this.message = this.selectors.successMessage;
  }

  async openHomePage() {
    await this.navigateTo(this.baseUrl);
  }

  async goToContactForm() {
    await this.clickElement(this.selectors.contactButton);
  }

  async fillContactForm() {
    await this.fillField(this.selectors.nameField, this.name);
    await this.fillField(this.selectors.emailField, this.email);
    await this.fillField(this.selectors.messageField, this.message);
  }

  async selectSubject() {
    await this.selectDropdownOption(this.selectors.subjectDropdown, this.subject);
  }

  async submitForm() {
    await this.clickElement(this.selectors.sendButton);
  }

  async getSuccessMessageLocator() {
    return this.locator(this.selectors.successMessage);
  }
}

module.exports = ContactPage;

