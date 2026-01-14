import { test } from '../../fixtures/pomFixtures.js';

test('User can add multiple items to cart', async({ homePage }) => {

    await homePage.goto();
    await homePage.selectCombinationPliers();
    await homePage.addCombinationPliersToCart();
    await homePage.goback();
    await homePage.selectBoltCutters();
    await homePage.addBoltCuttersToCart();
    await homePage.checkCart();
    await homePage.verifyCombinationPliersAreAddedToCart();
    await homePage.verifyBoltCuttersAreAddedToCart();
});