import LoginPage from  '../pageobjects/login.page';

import { ChainablePromiseElement } from 'webdriverio';
import loginPage from '../pageobjects/login.page';
import securePage from '../pageobjects/secure.page';

class ButtonWebElement {
    constructor(public element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) {}

    async getPassword() {
        return (await this.element).$('#password');
    }
}

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        loginPage.open();

        browser.addCommand('example', (selector: string) => {
            return $(selector);
        }, true);
        
        const body = await $('body');
        await (await body.example('#username')).setValue('invalid');

        const el1 = new ButtonWebElement($('body'));
        await (await el1.getPassword()).setValue('some value');
        
        const el2 = new ButtonWebElement(body.example('#content'));
        await (await el2.getPassword()).setValue('some other value');
        
        await loginPage.btnSubmit.click();
        await securePage.flashAlert.waitForDisplayed();
    });
});


