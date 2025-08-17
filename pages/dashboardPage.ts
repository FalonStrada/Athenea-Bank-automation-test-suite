import {Page,Locator} from '@playwright/test';  

export class LoginPage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
       
    }

    async visitarPaginaLogin() {
        await this.page.goto('http://localhost:3000/login');
        await this.page.waitForLoadState('networkidle');
    }
}