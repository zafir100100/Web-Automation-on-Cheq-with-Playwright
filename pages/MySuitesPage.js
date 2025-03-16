class MySuitesPage {
    constructor(page) {
        this.page = page;

        this.suite_radio = page.getByRole('radio');
        this.continue_button = page.getByRole('button', { name: /continue/i });
        this.modal_title = page.locator('//h6');
        this.create_order_radio = page.getByRole('radio', { name: /create/i });
    }

    async submitSuite() {
        await this.suite_radio.first().check();
        await this.continue_button.first().click();

        // const modalText = (await this.modal_title.nth(2).innerText()).toLowerCase();
        // console.log("modal title is: ");
        // console.log(modalText);
        // if (await this.modal_title.nth(2)) {
        //     if (modalText.includes('place an order')){
        //         await this.continue_button.nth(1).click();
        //         return 1;
        //     }
        //     else if (modalText.includes('existing order')){
        //         await this.create_order_radio.check();
        //         await this.continue_button.nth(1).click();
        //         return 2;
        //     }
        // }
        // return 0;
        
        // await this.page.keyboard.press('Tab');
        // await this.page.keyboard.press('Tab');
        // await this.page.keyboard.press('Enter');

    }
}

module.exports = MySuitesPage;
