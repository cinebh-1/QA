import { BasePage } from './basePage.js';
import { expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class HomePage extends BasePage {

    // selectors for ToolShop app
    combinationPliers = "//a[@class='card'][1]";
    cartButton = "//button[@id='btn-add-to-cart']";
    searchBox = "//input[@id='search-query']";
    searchButton = "//button[@data-test='search-submit']";
    woodSaw = "//img[@alt='Wood Saw']";
    boltCutters = "//img[@alt='Bolt Cutters']";
    cartCheckoutButton = "//a[@aria-label='cart']";
    combinationPliersCartItemText = "(//span[@class='product-title'])[1]";
    boltCuttersCartItemText = "(//span[@class='product-title'])[2]";
    noProductFoundText = "//div[@data-test='no-results']";
    languageChangeButton = "//button[@data-test='language-select']";
    languageChangeToGerman = "//a[@data-test='lang-de']";
    languageChangeToBosnian = "//a[@data-test='lang-ba']";

    //selectors for Cinebh app
    firstSignInButton = "//*[contains(text(), 'Sign In')]";
    emailField = "//input[@placeholder='Email Address']";
    passwordField = "//input[@placeholder='Password']";
    secondSignInButton = "//div[@class='space-y-6']/button";
    username = "//*[contains(text(),'mihaljcicfilip')]";
    
    constructor(page) {
        super(page);
    }

    async goto() {
        await super.goto(process.env.BASE_URL);
    }

    async goback() {
        await this.goBack();
    }

    async selectCombinationPliers() {
        await this.clickButton(this.combinationPliers);
    }

    async addCombinationPliersToCart() {
        await this.clickButton(this.cartButton);
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
    }

    async selectBoltCutters() {
        await this.clickButton(this.boltCutters);
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
    }

    async addBoltCuttersToCart() {
        await this.clickButton(this.cartButton);
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
    }

    async searchForWoodSawItem() {
        await this.fillField(this.searchBox, process.env.SEARCH_BOX_ITEM1);
        await this.clickButton(this.searchButton);
    }

    async searchForGuitarItem() {
        await this.fillField(this.searchBox, process.env.SEARCH_BOX_ITEM2);
        await this.clickButton(this.searchButton);
    }

    async guitarItemIsNotVisible() {
        await this.isVisible(this.noProductFoundText);
    }

    async woodSawItemIsVisible() {
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
        return await this.isVisible(this.woodSaw);
    }

    async checkCart() {
        await this.clickButton(this.cartCheckoutButton);
    }

    async verifyCombinationPliersAreAddedToCart() {
        await this.isVisible(this.combinationPliersCartItemText);
    }

    async verifyBoltCuttersAreAddedToCart() {
        await this.isVisible(this.boltCuttersCartItemText);
    }

    async changeLanguageToGerman() {
        await this.isVisible(this.languageChangeButton);
        await this.clickButton(this.languageChangeButton);
        await this.clickButton(this.languageChangeToGerman);
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
    }

    async changeLanguageToBosnian() {
        await this.isVisible(this.languageChangeButton);
        await this.clickButton(this.languageChangeButton);
        await this.clickButton(this.languageChangeToBosnian);
        await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
    }
}