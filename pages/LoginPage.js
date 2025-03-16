const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginPageUrl = `${process.env.BASE_URL}/login`;
    this.email_textbox = page.locator('#mui-2');
    this.password_textbox = page.locator('#mui-3');
    this.login_button = page.getByRole('button', { name: /log in/i });
    this.invalid_login_label = page.getByText(/invalid/i);
    this.my_events_label = page.getByText(/my event/i);
  }

  async gotoLoginPage() {
    await this.page.goto(this.loginPageUrl);
  }

  async doLogin(username, password) {
    await this.email_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }

  async validateSuccessfulLogin() {
    await expect(this.login_button).toBeVisible({ state: 'hidden' });
    await expect(this.my_events_label).toBeVisible();
  }

  async validateFailedLogin() {
    await expect(this.login_button).toBeVisible();
    await expect(this.invalid_login_label).toBeVisible();
  }
}

module.exports = LoginPage;
