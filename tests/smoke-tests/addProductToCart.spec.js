import { test } from '../../fixtures/pomFixtures.js';

test('User can add product to cart and proceed to checkout - positive', async({ homePage, checkoutPage }) => {
    
    // homepage methods
    await homePage.goto();
    await homePage.selectCombinationPliers();
    await homePage.addCombinationPliersToCart();

    // checkout page methods
    await checkoutPage.goto();
    await checkoutPage.proceedToCheckoutCart();
    await checkoutPage.proceedAsGuest();
    await checkoutPage.fillCheckoutForm();
    await checkoutPage.proceedToCheckoutSignIn();
    await checkoutPage.proceedToCheckoutBillingAddress();
    await checkoutPage.fillBillingInfo();
    await checkoutPage.proceedToCheckoutPayment();
    await checkoutPage.selectPaymentMethod();
    await checkoutPage.confirmPayment();
    await checkoutPage.checkSuccessMessage();
    await checkoutPage.finalConfirm();   
});
 
test("User can't proceed to checkout without required info - negative", async({ homePage, checkoutPage }) => {

    await homePage.goto();
    await homePage.selectCombinationPliers();
    await homePage.addCombinationPliersToCart();

    await checkoutPage.goto();
    await checkoutPage.proceedToCheckoutCart();
    await checkoutPage.proceedAsGuest();
    await checkoutPage.proceedToCheckoutSignIn();
    await checkoutPage.verifyEmailErrorMessage();
    await checkoutPage.verifyFirstNameErrorMessage();
    await checkoutPage.verifyLastNameErrorMessage();
});

