const { expect } = require('@playwright/test');

class SuitePreferencesPage {
    constructor(page) {
        this.page = page;
        this.save_button = page.getByRole('button', { name: /save/i });
        this.pre_order_label = page.getByText(/pre-order/i);
    }

    async submitSuitePreferences() {
        await this.save_button.click();
    }

    async validateSuitePreferencesSubmission() {
        await expect(this.pre_order_label).toBeVisible();
    }
}

module.exports = SuitePreferencesPage;
