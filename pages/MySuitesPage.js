const { expect } = require('@playwright/test');

class MySuitesPage {
    constructor(page) {
        this.page = page;

        this.suite_radio = page.getByRole('radio');
        this.continue_button = page.getByRole('button', { name: /continue/i });
        this.order_modal = page.locator('div[role="presentation"]');
        this.create_order_radio = page.getByRole('radio', { name: 'Create new order' });
        this.pre_order_label = page.getByText(/pre-order/i);
        this.suite_preferences_label = page.getByText(/suite preference/i);
    }

    async submitSuite() {
        await this.suite_radio.first().check();
        await this.continue_button.click();

        await this.order_modal.waitFor({ state: 'visible' });

        await this.order_modal.locator('div h6').waitFor({ state: 'visible' });
        const modalTitle = await this.order_modal.locator('div h6').textContent();

        if (modalTitle.includes('place an order')) {
            await this.page.getByRole('button', { name: 'Continue' }).click();
            await expect(this.suite_preferences_label).toBeVisible();
            return 1;
        }
        else if (modalTitle.includes('exisiting order')) {
            await this.page.getByRole('radio', { name: 'Create new order' }).check();
            await this.page.getByRole('button', { name: 'Continue' }).click();
            await expect(this.pre_order_label).toBeVisible();
            return 2;
        }
        else{
            return 0;
        }
    }
}

module.exports = MySuitesPage;
