class SuitePreferencesPage {
    constructor(page) {
        this.page = page;
        this.save_button = page.getByRole('button', { name: /save/i });
    }

    async submitSuitePreferences() {
        await this.save_button.click();
    }
}

module.exports = SuitePreferencesPage;
