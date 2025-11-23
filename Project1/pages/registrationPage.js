const BasePage = require('./basePage');
require ('dotenv').config();

class RegistrationPage extends BasePage {
    async register() {
        await this.goto('/auth/register');
        //update-ati selectore 
        await this.fill('#firstName', process.env.REGISTER_FIRSTNAME);
        await this.fill('#lastName', process.env.REGISTER_LASTNAME);
        await this.fill('#dob', process.env.REGISTER_DATEOFBIRTH);
        await this.fill('#street', process.env.REGISTER_STREET);
        await this.fill('#postalcode', process.env.REGISTER_POSTALCODE);
        await this.fill('#city', process.env.REGISTER_CITY);
        await this.fill('#state', process.env.REGISTER_STATE);
        await this.fill("#country", process.env.REGISTER_COUNTRY);
        await this.fill('#phone', process.env.REGISTER_PHONE);
        await this.fill('#email', process.env.REGISTER_EMAIL);
        await this.fill('#password', process.env.REGISTER_PASSWORD);
    }
}

module.exports = RegistrationPage;