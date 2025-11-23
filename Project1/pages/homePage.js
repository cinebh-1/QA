const BasePage = require("./basePage");

class HomePage extends BasePage { 
    
    // Define selectors specific to homepage
    homePageTitleText = this.page.locator("a[title='Practice Software Testing - Toolshop']");
    homePageBannerPicture = this.page.locator("img[alt='Banner']");
    signInButton = this.page.locator("a[data-test='nav-sign-in']");
    homeButton = this.page.locator("a[data-test='nav-home']");
    categoriesButton = this.page.locator("a[role='button'][href='#']");
    contactButton = this.page.locator("a[data-test='nav-contact']");
    languageChangeButton = this.page.locator("button[type='button'][data-test='language-select']");
    searchBox = this.page.locator("input[placeholder='Search']");
    searchButton = this.page.locator("button[type='submit']");

    constructor(page) {
        super(page);
    }

    async searchFor(term) {
        await this.waitForVisible(this.searchBox);
        await this.fill(this.searchBox, term);
        await this.waitForVisible(this.searchButton);
        await this.click(this.searchButton);
    }

    async homePageTextIsVisible(selector) {
        await this.waitForVisible(selector);
        return await this.isVisible(selector);
    }

    async signInButtonIsVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }

    async languageChangeButtonIsVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }

    async contactButonIsVisible(selector) {
        await this.page.isVisible(selector);
        await this.page.isVisible(selector);
    }

    async searchBoxIsVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }

    async categoriesButtonIsVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }

    async homePageBannerPictureIsVisible(selector) {
        await this.waitForVisible(selector);
        await this.page.isVisible(selector);
    }
}

module.exports = HomePage;