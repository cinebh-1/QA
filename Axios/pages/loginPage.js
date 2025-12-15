import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';
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
        await this.clickButton(this.loginButton);
    }

    async usernameIsVisible() {
        await expect(this.page.getByText('Sebastian Hale')).toBeVisible();
    }
}
