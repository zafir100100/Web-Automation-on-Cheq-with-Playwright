// require('dotenv').config();
// const { test } = require('@playwright/test');

// const LoginPage = require('../pages/LoginPage');
// const MyEventPage = require('../pages/MyEventPage');

// // Event Suite
// test.describe('Event Suite', () => {
//     test('@event Successful event selection', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.gotoLoginPage();
//         await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
//         await loginPage.validateSuccessfulLogin();
//         const myEventPage = new MyEventPage(page);
//         await myEventPage.submitEvent();
//     });

//     test('@event Successful event selection with event preferences', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.gotoLoginPage();
//         await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
//         await loginPage.validateSuccessfulLogin();
//         const myEventPage = new MyEventPage(page);
//         await myEventPage.submitEvent();
//     });
// });