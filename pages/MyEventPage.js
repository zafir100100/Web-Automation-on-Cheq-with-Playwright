const { expect } = require('@playwright/test');

class MyEventPage {
  constructor(page) {
    this.page = page;
    this.date_button = page.locator('button').filter({ hasText: /17/i });
    this.event_radio = page.getByRole('radio').first();
    this.continue_button = page.getByRole('button', { name: /continue/i });
    this.my_suites_label = page.getByText(/my suites/i);
  }

  async submitEvent() {
    await this.date_button.click();
    await this.event_radio.check();
    await this.continue_button.click();
    await this.validateSuccessfulSuiteSubmission();
  }

  async validateSuccessfulSuiteSubmission() {
    await expect(this.continue_button).toBeVisible({ state: 'hidden' });
    await expect(this.my_suites_label).toBeVisible();
  }
}

module.exports = MyEventPage;