class PreOrderPage {
    constructor(page) {
        this.page = page;
        this.category_labels = page.locator("//div[@role='tablist']/a");
        this.next_button = page.locator("//*[@data-testid='KeyboardArrowRightIcon']");
        this.add_to_order_button = page.locator("//button[text()='+ Add to order']");
        this.submit_pre_order_button = page.locator("//button[@data-test-id='view-cart-btn']");
    }

    async addItems() {
        const elements = await this.category_labels.elementHandles();
        for (const element of elements) {
            if (!(await element.isVisible())) {
                await this.next_button.click();
            }
            await element.click();
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Enter');
            await this.add_to_order_button.click();
        }
    }

    async submitPreOrder() {
        await this.submit_pre_order_button.click();
    }
}

module.exports = PreOrderPage;
