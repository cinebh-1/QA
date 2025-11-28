import { BasePage } from './basePage.js';
import { RegistrationSelectors } from './../selectors/registrationSelectors.js';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

export class RegistrationPage extends BasePage {

    // selectors initialized as class fields before constructor
    firstName = RegistrationSelectors.firstName;
    lastName = RegistrationSelectors.lastName;
    dateOfBirth = RegistrationSelectors.dateOfBirth;
    street = RegistrationSelectors.street;
    postalCode = RegistrationSelectors.postalCode;
    city = RegistrationSelectors.city;
    state = RegistrationSelectors.state;
    country = RegistrationSelectors.country;
    phone = RegistrationSelectors.phone;
    emailAddress = RegistrationSelectors.emailAddress;
    password = RegistrationSelectors.password;
    registerButton = RegistrationSelectors.registerButton;
    
    // constructor stays clean 
    constructor(page) {
        super(page);
    }

    async gotoRegisterPage() {
        await super.goto(process.env.REGISTER_URL);
    }

    async fillRegistrationForm(
        // setting up variables with .env values
        firstName = process.env.REGISTER_FIRSTNAME,
        lastName = process.env.REGISTER_LASTNAME, 
        dateOfBirth = process.env.REGISTER_DATEOFBIRTH,
        street = process.env.REGISTER_STREET,
        postalCode = process.env.REGISTER_POSTALCODE,
        city = process.env.REGISTER_CITY,
        state = process.env.REGISTER_STATE,
        country = process.env.REGISTER_COUNTRY,
        phone = process.env.REGISTER_PHONE,
        emailAddress = process.env.REGISTER_EMAIL,
        password = process.env.REGISTER_PASSWORD
    ) {
        // using variables inside methods
        await this.fillField(this.firstName, firstName);
        await this.fillField(this.lastName, lastName);
        await this.fillField(this.dateOfBirth, dateOfBirth);
        await this.fillField(this.street, street);
        await this.fillField(this.postalCode, postalCode);
        await this.fillField(this.city, city);
        await this.fillField(this.state, state);
        await this.selectDropdownOption(this.country, country);
        await this.fillField(this.phone, phone);
        await this.fillField(this.emailAddress, emailAddress);
        await this.fillField(this.password, password);
      }

    async submitForm() {
        await this.clickButton(this.RegistrationSelectors.registerButton);
    }
}
