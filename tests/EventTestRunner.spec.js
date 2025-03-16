require('dotenv').config();
const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const MyEventPage = require('../pages/MyEventPage');
const MySuitePage = require('../pages/MySuitesPage');
const SuitePreferencesPage = require('../pages/SuitePreferencesPage');

test.describe('Event', () => {
    test('@event Successful event selection', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
        await loginPage.validateSuccessfulLogin();
        const myEventPage = new MyEventPage(page);
        await myEventPage.submitEvent();
    });

    test('@event Successful event selection with event preferences', async ({ page }) => {
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
    });
});