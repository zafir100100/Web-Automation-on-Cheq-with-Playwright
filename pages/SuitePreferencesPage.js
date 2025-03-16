class SuitePreferencesPage {
    constructor(page) {
        this.page = page;
        this.save_button = page.locator("//button[@type='submit']");
    }

    async submitSuitePreferences() {
        await this.save_button.click();
    }
}

module.exports = SuitePreferencesPage;
