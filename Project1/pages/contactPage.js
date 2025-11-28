import { BasePage } from './basePage.js';
import { ContactSelectors } from './../selectors/contactSelectors.js';
import dotenv from 'dotenv';

// Load .env variables 
dotenv.config(); 

export class ContactPage extends BasePage {

  // selectors initialized as class fields 
  firstName = ContactSelectors.firstName;
  lastName = ContactSelectors.lastName;
  emailAddress = ContactSelectors.emailAddress;
  subjectDropdown = ContactSelectors.subjectDropdown;
  messageTextArea = ContactSelectors.messageTextArea;
  sendButton = ContactSelectors.sendButton;
  successMessage = ContactSelectors.successMessage;

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

  async submitForm() {
    await this.clickButton(this.sendButton);
  }
}
