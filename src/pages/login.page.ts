import { ChainablePromiseElement } from 'webdriverio';
import { click, setText } from '../../common/command';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#authEmail');
    }

    public get inputPassword () {
        return $('#authPassword');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        // await this.btnSubmit.click();
        await setText(this.inputUsername,username);
        await setText(this.inputPassword,password);
        await click(this.btnSubmit);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('sign_in');
    }
}

export default new LoginPage();
