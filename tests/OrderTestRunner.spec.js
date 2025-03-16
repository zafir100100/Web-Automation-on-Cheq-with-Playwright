require('dotenv').config();
const { test } = require('@playwright/test');
const allure = require('allure-js-commons');

const LoginPage = require('../pages/LoginPage');
const MyEventPage = require('../pages/MyEventPage');
const MySuitePage = require('../pages/MySuitesPage');
const SuitePreferencesPage = require('../pages/SuitePreferencesPage');
const PreOrderPage = require('../pages/PreOrderPage');
const MyOrderPage = require('../pages/MyOrderPage');

test.describe('Order', () => {
    test('@order @regression Product order with payment', async ({ page }) => {
        await allure.description("This test checks the full product order flow, including login, event submission, suite preferences, pre-order items, and final payment.");
        await allure.epic("Product Order Flow");
        await allure.feature("Order Product with Payment");
        await allure.story("As a user, I want to order a product and make a payment successfully.");
        await allure.tags("order", "regression", "payment", "ui");
        await allure.owner("zafir100100");

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
        await loginPage.validateSuccessfulLogin();
        const myEventPage = new MyEventPage(page);
        await myEventPage.submitEvent();
        await myEventPage.validateSuccessfulEventSubmission();
        const mySuitesPage = new MySuitePage(page);
        const suiteState = await mySuitesPage.submitSuite();
        if (suiteState === 1) {
            const suitePreferencesPage = new SuitePreferencesPage(page);
            await suitePreferencesPage.submitSuitePreferences();
            await suitePreferencesPage.validateSuitePreferencesSubmission();
        }
        const preOrderPage = new PreOrderPage(page);
        await preOrderPage.addItems();
        await preOrderPage.submitPreOrder();
        await preOrderPage.validatePreOrderSubmission();
        const myOrderPage = new MyOrderPage(page);
        await myOrderPage.submitPreOrder();
        await myOrderPage.submitCreditCardInfo(process.env.CREDIT_CARD_NUMBER, process.env.CREDIT_CARD_EXPIRY, process.env.CREDIT_CARD_CVV, process.env.CREDIT_CARD_NAME);
        await myOrderPage.validateOrderSubmission();
    });

    // test('@order Pre-Order product add to Cart', async ({ page }) => {
    //     const loginPage = new LoginPage(page);
    //     await loginPage.gotoLoginPage();
    //     await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
    //     await loginPage.validateSuccessfulLogin();
    //     const myEventPage = new MyEventPage(page);
    //     await myEventPage.submitEvent();
    //     await myEventPage.validateSuccessfulEventSubmission();
    //     const mySuitesPage = new MySuitePage(page);
    //     const suiteState = await mySuitesPage.submitSuite();
    //     if (suiteState === 1) {
    //         const suitePreferencesPage = new SuitePreferencesPage(page);
    //         await suitePreferencesPage.submitSuitePreferences();
    //         await suitePreferencesPage.validateSuitePreferencesSubmission();
    //     }
    //     const preOrderPage = new PreOrderPage(page);
    //     await preOrderPage.addItems();
    //     await preOrderPage.submitPreOrder();
    //     await preOrderPage.validatePreOrderSubmission();
    // });
});