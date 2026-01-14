// base page that will contain all shared methods (goto, fill, click etc...)

//import { expect } from 'allure-playwright';
import { expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class BasePage {
  
  constructor(page) {
    this.page = page;
  }

async goto(url) {
  await this.page.goto(url);
  await this.page.waitForLoadState('networkidle');
}

async goBack() {
  await this.page.goBack();
}

async fillField(locator, value) {
  await this.page.waitForLoadState('networkidle');
  await this.page.locator(locator).fill(value);
  await this.page.waitForTimeout(parseFloat(process.env.TIME_DELAY));
}

async clickButton(locator) {
  await this.page.waitForLoadState('networkidle');
  await this.page.locator(locator).click();
}

async getText(locator) {
  return await this.page.locator(locator).textContent();
}

async isVisible(selector) {
    return await this.page.isVisible(selector);
}

async selectDropdownOption(locator, optionValueOrLabel) {
  const dropdown = this.page.locator(locator);
  await dropdown.selectOption(optionValueOrLabel);
  }
}



