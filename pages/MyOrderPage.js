
class MyOrderPage {
    constructor(page) {
        this.page = page;
        this.pre_order_button = page.locator("//button[contains(text(),'Pre-Order')]");
        this.credit_card_button = page.locator("//button[@aria-label='Credit Card']");
        this.credit_card_number_label = page.locator("//*[contains(text(),'Card number')]");
        this.credit_card_exp_date_label = page.locator("//input[@name='creditCardExpirationDate']");
        this.credit_card_cvv_label = page.locator("//input[@name='creditCardCvv']");
        this.credit_card_name_label = page.locator("//button[@type='submit']");
        this.credit_card_verify_subtotal_button = page.locator("//*[contains(text(),'Verify subtotal')]");
        this.order_status_text = page.locator("//p[contains(text(),'your order')]");
    }

    async submitPreOrder() {
        await this.pre_order_button.click();
    }

    async submitCreditCardInfo(number, exp, cvv, name) {
        await this.page.getByRole('button', { name: 'Credit Card' }).waitFor({ state: 'visible', timeout: 40000 });
        await this.page.getByRole('button', { name: 'Credit Card' }).click();
        await this.page.locator('iframe[title="Iframe for secured card number"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill(number);
        await this.page.locator('iframe[title="Iframe for secured card expiry date"]').contentFrame().getByRole('textbox', { name: 'Expiry date' }).fill(exp);
        await this.page.locator('iframe[title="Iframe for secured card security code"]').contentFrame().getByRole('textbox', { name: 'Security code' }).fill(cvv);
        await this.page.getByRole('textbox', { name: 'Name on card' }).fill(name);
        await this.page.getByRole('button', { name: 'Verify subtotal: $' }).click();
    }

    async validateOrderSubmission() {
        // await this.order_status_text.waitFor({ state: 'visible' });
    }
}

module.exports = MyOrderPage;
