import { BasePage } from './basePage.js';
import dotenv from 'dotenv';

dotenv.config();

export class HomePage extends BasePage {

    product = "//img[@alt='Combination Pliers']";

    constructor(page) {
        super(page);
    }

    async goto() {
        await super.goto(process.env.BASE_URL);
    }
}