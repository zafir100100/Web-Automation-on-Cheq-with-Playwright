
class MyOrderPage {
    constructor(page) {
        this.page = page;
        this.pre_order_button = page.locator("//button[contains(text(),'Pre-Order')]");
        this.credit_card_button = page.locator("//*[text()='Credit Card']");
        this.credit_card_number_label = page.locator("//*[contains(text(),'Card number')]");
        this.credit_card_exp_date_label = page.locator("//input[@name='creditCardExpirationDate']");
        this.credit_card_cvv_label = page.locator("//input[@name='creditCardCvv']");
        this.credit_card_name_label = page.locator("//button[@type='submit']");
        this.credit_card_verify_subtotal_button = page.locator("//*[contains(text(),'Verify subtotal')]");
        this.order_status_text = page.locator("//h6");
    }

    async submitCreditCardInfo(number, exp, cvv, name) {
        await this.credit_card_button.click();
        await this.credit_card_number_label.click();
        await this.page.keyboard.type(number);
        await this.credit_card_exp_date_label.click();
        await this.page.keyboard.type(exp);
        await this.credit_card_cvv_label.click();
        await this.page.keyboard.type(cvv);
        await this.credit_card_name_label.click();
        await this.page.keyboard.type(name);
        await this.credit_card_verify_subtotal_button.click();
    }

    async submitOrder() {
        await this.pre_order_button.click();
        await this.submitCreditCardInfo(process.env.CREDIT_CARD_NUMBER, process.env.CREDIT_CARD_EXP_DATE, process.env.CREDIT_CARD_CVV, process.env.CREDIT_CARD_NAME);
        await this.order_status_text.waitFor({timeout: 10000});
    }
}

module.exports = MyOrderPage;
