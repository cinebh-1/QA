import { test } from '../../fixtures/pomFixtures.js';

test("User can change language from English to German - positive", async({ homePage }) => {

    await homePage.goto();
    await homePage.changeLanguageToGerman();
});
