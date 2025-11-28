// base page that will contain all shared methods (goto, fill, click etc...)
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

async fillField(locator, value) {
  await this.page.waitForLoadState('networkidle');
  await this.page.waitForSelector(locator, {state: 'visible'});
  await this.page.locator(locator).fill(value);
  await this.page.waitForTimeout(parseFloat(process.env.CONTACTFORM_TIME_DELAY));
}

async clickButton(locator) {
  await this.page.waitForLoadState('networkidle');
  await this.page.waitForSelector(locator, {state: 'visible'});
  await this.page.locator(locator).click();
}

async getText(locator) {
  return await this.page.locator(locator).textContent();
}

async isVisible(locator) {
  return await this.page.locator(locator).isVisible();
}

async selectDropdownOption(locator, optionValueOrLabel) {
  //await this.waitForVisible(locator);
  await this.page.locator(locator).selectOption(optionValueOrLabel);
  }
}


