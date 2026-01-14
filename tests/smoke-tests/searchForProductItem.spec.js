import { test } from '../../fixtures/pomFixtures.js';

test('User can search for product item - positive', async({ homePage }) => {

    // homepage methods 
    await homePage.goto();
    await homePage.searchForWoodSawItem();
    await homePage.woodSawItemIsVisible();
});

test("User can't search for product item that is not related to tools - negative", async({ homePage }) => {

    await homePage.goto();
    await homePage.searchForGuitarItem();
    await homePage.guitarItemIsNotVisible();
}); 