// all basic methods that we are using are contained here (navigate, click, fill etc...)
//require('dotenv').config();

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('networkidle');
  }

  async isElementVisible(selector) {
    await this.waitForVisible(selector);
    return await this.page.isVisible(selector);
  }

  async clickElement(selector) {
    await this.waitForVisible(selector);
    await this.page.click(selector);
  }

  async fillField(selector, value) {
    await this.waitForVisible(selector);
    await this.page.fill(selector, value);
  }

  async selectDropdownOption(selector, optionValue) {
    await this.waitForVisible(selector);
    await this.page.selectOption(selector, optionValue);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  locator(selector) {
    return this.page.locator(selector);
  }
}

module.exports = BasePage;



/* class BasePage {
    
    constructor(page) {
        this.page = page;
        this.baseUrl = process.env.BASE_URL;
    }

    // universal navigate method for all pages
    async goto(path = '/') {
        await this.page.goto(`${this.baseUrl}${path}`);
        await this.page.waitForLoadState('networkidle');
    }

    // universal fill method for all input fields
    async type(selector, text) {
        await this.waitForVisible(selector);
        await this.page.fill(selector, text);
    }

    // universal click method for all buttons 
    async click(selector) {
        await this.waitForVisible(selector);
        await this.page.click(selector);
    }

    // universal method for checking selector visibility 
    async isVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }

    // universal method for verifying title of web elements
    async getText(selector) {
        return await this.page.textContent(selector);
    }

    // universal method for static dropdown menu options 
    async selectDropdownOption(selector, optionValue) {
        await this.page.selectOption(selector, optionValue);
    }
}

module.exports = BasePage; */



