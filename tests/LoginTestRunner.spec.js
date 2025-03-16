// require('dotenv').config();

// const { faker } = require('@faker-js/faker');
// const { test } = require('@playwright/test');
// const allure = require('allure-js-commons');

// const LoginPage = require('../pages/LoginPage');

// test.describe.parallel('Login', () => {
//     test('@sanity @parallel User login with valid credentials', async ({ page }) => {
//         await allure.description("This test validates the login functionality using valid credentials.");
//         await allure.epic("User Login");
//         await allure.feature("Login with valid credentials");
//         await allure.story("As a user, I want to login with valid credentials and access my account.");
//         await allure.tags("login", "sanity", "positive");
//         await allure.owner("zafir100100");

//         const loginPage = new LoginPage(page);
//         await allure.step("Navigate to the login page", async () => {
//             await loginPage.gotoLoginPage();
//         });

//         await allure.step("Perform login with valid credentials", async () => {
//             await loginPage.doLogin(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
//         });

//         await allure.step("Validate successful login", async () => {
//             await loginPage.validateSuccessfulLogin();
//         });
//     });

//     test('@parallel User login with invalid credentials', async ({ page }) => {
//         await allure.description("This test checks that a user cannot log in with invalid credentials.");
//         await allure.epic("User Login");
//         await allure.feature("Login with invalid credentials");
//         await allure.story("As a user, I want to be informed when I try to login with invalid credentials.");
//         await allure.tags("login", "sanity", "negative");
//         await allure.owner("zafir100100");

//         const loginPage = new LoginPage(page);
//         await allure.step("Navigate to the login page", async () => {
//             await loginPage.gotoLoginPage();
//         });

//         await allure.step("Perform login with invalid credentials", async () => {
//             await loginPage.doLogin(faker.internet.email(), faker.internet.password());
//         });

//         await allure.step("Validate failed login", async () => {
//             await loginPage.validateFailedLogin();
//         });
//     });
// });