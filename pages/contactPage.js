import { BasePage } from './basePage.js';
import dotenv from 'dotenv';

// Load .env variables 
dotenv.config(); 

export class ContactPage extends BasePage {

  // selectors initialized as class fields 
  firstName = "//input[@id='first_name']";
  lastName = "//input[@id='last_name']";
  emailAddress = "//input[@id='email']";
  subjectDropdown = "//select[@id='subject']";
  messageTextArea = "//textarea[@id='message']";
  sendButton = "//input[@class='btnSubmit']";
  successMessage = "//div[@role='alert']";
  successText = "//div[@role='alert']";

  constructor(page) {
    super(page);
  }
  
  async goto() {
    await super.goto(process.env.CONTACT_URL); 
  }
  
  async fillContactForm (
    firstName = process.env.CONTACT_FIRST_NAME,
    lastName = process.env.CONTACT_LAST_NAME,
    emailAddress = process.env.CONTACT_EMAIL_ADDRESS,
    subject = process.env.CONTACT_SUBJECT,
    message = process.env.CONTACT_MESSAGE
  ) {
    await this.fillField(this.firstName, firstName);
    await this.fillField(this.lastName, lastName);
    await this.fillField(this.emailAddress, emailAddress);
    await this.selectDropdownOption(this.subjectDropdown, subject);
    await this.fillField(this.messageTextArea, message);
  }

  async checkContactFormSuccessMessage() {
    return await this.isVisible(this.successText);
  }

  async fillIncompleteContactForm(
    firstName = process.env.CONTACT_FIRST_NAME,
    lastName = process.env.CONTACT_LAST_NAME
  ) {
    await this.fillField(this.firstName, firstName);
    await this.fillField(this.lastName, lastName);
  }

  async firstNameMissingErrorIsVisible() {
    return await this.isVisible(this.firstName);
  }

  async lastNameMissingErrorIsVisible() {
    return await this.isVisible(this.lastName);
  }

  async submitForm() {
    await this.clickButton(this.sendButton);
  }
}
