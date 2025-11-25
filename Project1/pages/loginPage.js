import { BasePage } from './base-page.js';
import { LoginSelectors } from '../selectors/login-selectors.js';
import dotenv from ('dotenv');

// Load .env variables
dotenv.config();

export class LoginPage extends BasePage {

    // selectors initialized as class fields 
    emailAddress = LoginSelectors.emailAddress;
    password = LoginSelectors.password;
    loginButton = LoginSelectors.loginButton;

    // constructor stays clean
    constructor(page) {
        super(page);
    }

    async goto() {
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
        await this.clickButton(this.LoginSelectors.loginButton);
    }
}


 