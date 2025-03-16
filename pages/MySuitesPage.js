class MySuitesPage {
    constructor(page) {
        this.page = page;
        this.suite_radio = page.locator("//input[@type='radio']");
        this.continue_button = page.locator("//button[text()='CONTINUE']");
        this.place_order_label = page.locator("//h6[text()='Place an order?']");

        // this.suite_radio = page.getByRole('radio');
        // this.continue_button = page.getByRole('button', { name: /continue/i });
        // this.place_order_label = page.getByText('Place an order?', { exact: true });
    }

    async submitSuite() {
        await this.suite_radio.first().click();
        await this.continue_button.click();
        // await this.place_order_label.click();
        // await this.page.keyboard.press('Tab');
        // await this.page.keyboard.press('Enter');
    }
}

module.exports = MySuitesPage;
