// selectors for Contact form page
const selectors = {
    contactButton: "//a[@data-test='nav-contact']",
    firstName: "//input[@placeholder='Your first name *']",
    lastName: "//input[@placeholder='Your last name *']", 
    emailAddress: "//input[@placeholder='Your email *']",
    subjectDropdown: "//select[@data-test='subject']",
    messageTextArea: "//textarea[@formcontrolname='message']",
    sendButton: "//input[@value='Send']",
    successMessage: "//div[@role='alert']",
};

module.exports = selectors;