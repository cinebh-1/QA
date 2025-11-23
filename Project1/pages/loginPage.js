const BasePage = require('./basePage');

class LoginPage extends BasePage {
    async login() {
        await this.goto('/login');
        await this.fillField('#username', process.env.LOGIN_USERNAME);
        await this.fillField('#password', process.env.LOGIN_PASSWORD);
        await this.clickButton('#login');
    }
}

module.exports = LoginPage;