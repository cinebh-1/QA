import { log } from 'console';
import { BasePage } from './basePage.js';
import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

export class LoginPage extends BasePage {

    // selectors initialized as class fields 
    emailAddress = "//input[@id='email']";
    password = "//input[@id='password']";
    loginButton = "//input[@value='Login']";
    loginUsername = "//a[@data-test='nav-menu']";

    // constructor stays clean
    constructor(page) {
        super(page);
    }

    async gotoLoginPage() {
        await this.page.goto(process.env.LOGIN_URL);
    }

    async fillLoginForm (
        emailAddress = process.env.LOGIN_USERNAME,
        password = process.env.LOGIN_PASSWORD,
    ) {
        await this.fillField(this.emailAddress, emailAddress);
        await this.fillField(this.password, password);
    }

    async submitForm() {
        await this.clickButton(this.loginButton);
    }

    async usernameIsVisible(loginUsername) {
        return await this.isVisible(this.loginUsername);
    }

    //validacija login-a (neki success message ili profile name da je vidljiv)
}
