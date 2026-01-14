import { BasePage } from './basePage.js';
import dotenv from 'dotenv';

dotenv.config(); 

export class CheckoutPage extends BasePage {

    // checkout page selectors
    proceedToCheckoutButtonCart = "//body//app-root//app-checkout//button[2]"; 
    continueAsGuestButton1 = "//a[normalize-space()='Continue as Guest']"; 
    guestEmailField = "//input[@id='guest-email']"; 
    guestFirstName = "//input[@id='guest-first-name']";  
    guestLastName = "//input[@id='guest-last-name']"; 
    proceedToCheckoutButton2 = "//input[@value='Continue as Guest']"; 
    proceedToCheckoutButton3 = "//button[@data-test='proceed-3']"; 
    proceedToCheckoutButton4 = "//button[@data-test='proceed-2-guest']"; 

    // billing info section selectors
    street = "//input[@id='street']";
    city = "//input[@id='city']";
    state = "//input[@id='state']";
    country = "//input[@id='country']";
    postalCode = "//input[@id='postal_code']";

    // payment section selectors
    paymentOption = "//select[@id='payment-method']";
    confirmPaymentButton = "//button[@data-test='finish']";
    successMessageBanner = "//div[@data-test='payment-success-message']";
    finalConfirmButton = "//button[@data-test='finish']";

    // sign in section error messages selectors 
    emailRequiredError = "//div[@data-test='guest-email-error']//div";
    firstNameRequiredError = "//div[@id='guest-first-name-error']";
    lastNameRequiredError = "//div[@data-test='guest-last-name-error']//div";

    constructor(page) {
        super(page);
    }

    async goto() {
        await super.goto(process.env.CHECKOUT_URL);
    }

    async proceedToCheckoutCart() {
        await this.clickButton(this.proceedToCheckoutButtonCart);
    }

    async proceedAsGuest() {
        await this.clickButton(this.continueAsGuestButton1);
    }

    async fillCheckoutForm (
        email = process.env.GUEST_EMAIL,
        firstName = process.env.GUEST_FIRST_NAME,
        lastName = process.env.GUEST_LAST_NAME
    ) 
    {
        await this.fillField(this.guestEmailField, email);
        await this.fillField(this.guestFirstName, firstName);
        await this.fillField(this.guestLastName, lastName);
    }

    async proceedToCheckoutSignIn() {
        await this.clickButton(this.proceedToCheckoutButton2);
    }

    async verifyEmailErrorMessage() {
        return await this.isVisible(this.emailRequiredError);
    }

    async verifyFirstNameErrorMessage() {
        return await this.isVisible(this.firstNameRequiredError);
    }

    async verifyLastNameErrorMessage() {
        return await this.isVisible(this.lastNameRequiredError);
    }

    async proceedToCheckoutPayment() {
        await this.clickButton(this.proceedToCheckoutButton3);
    }

    async fillBillingInfo (
        street = process.env.BILLING_INFO_STREET,
        city = process.env.BILLING_INFO_CITY, 
        state = process.env.BILLING_INFO_STATE, 
        country = process.env.BILLING_INFO_COUNTRY, 
        postalCode = process.env.BILLING_INFO_POSTALCODE
    ) 
    {
        await this.fillField(this.street, street);
        await this.fillField(this.city, city);
        await this.fillField(this.state, state);
        await this.fillField(this.country, country);
        await this.fillField(this.postalCode, postalCode);  
    }

    async proceedToCheckoutBillingAddress() {
        await this.clickButton(this.proceedToCheckoutButton4);
    }

    async selectPaymentMethod() {
        await this.selectDropdownOption(this.paymentOption, process.env.PAYMENT_SUBJECT);
    }

    async confirmPayment() {
        await this.clickButton(this.confirmPaymentButton);
    } 

    async checkSuccessMessage() {
        return await this.page.isVisible(this.successMessageBanner);
    }
    
    async finalConfirm() {
        await this.clickButton(this.finalConfirmButton);
    }
}