const { expect } = require('@playwright/test');

class PreOrderPage {
    constructor(page) {
        this.page = page;
        this.category_labels = page.locator("//div[@role='tablist']/a");
        this.next_button = page.locator("//*[@data-testid='KeyboardArrowRightIcon']");
        this.add_to_order_button = page.locator("//button[text()='+ Add to order']");
        this.submit_pre_order_button = page.locator("//button[@data-test-id='view-cart-btn']");
        this.my_order_label = page.getByText(/my order/i);
    }

    async addItems() {
        const categoryCount = await this.category_labels.count();
        for (let i = 0; i < categoryCount; i++) {
            let categories = await this.category_labels.elementHandles();
            let category = categories[i];
            if (!(await category.isVisible())) {
                await this.next_button.click();
                categories = await this.category_labels.elementHandles();
                category = categories[i];
            }
            await category.click();
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Enter');
            await this.add_to_order_button.click();
            await this.add_to_order_button.waitFor({ state: 'hidden', timeout: 40000 });
        }
    }

    async submitPreOrder() {
        await this.submit_pre_order_button.click();
    }

    async validatePreOrderSubmission() {
        await expect(this.submit_pre_order_button).toBeVisible({ state: 'hidden' });
        await expect(this.my_order_label).toBeVisible();
    }
}

module.exports = PreOrderPage;
