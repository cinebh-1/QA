import { BasePage } from './basePage.js';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

export class RegistrationPage extends BasePage {

    // selectors initialized as class fields before constructor
    firstName = "//input[@id='first_name']";
    lastName = "//input[@id='last_name']";
    dateOfBirth = "//input[@id='dob']";
    street = "//input[@id='street']";
    postalCode = "//input[@id='postal_code']";
    city = "//input[@id='city']";
    state = "//input[@id='state']";
    country = "//select[@id='country']";
    phone = "//input[@id='phone']";
    emailAddress = "//input[@id='email']"; 
    password = "//input[@id='password']";
    registerButton = "//button[@type='submit']";
    
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
        await this.clickButton(this.registerButton);
    }
}
