import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly addComputerBtn:Locator
    readonly sucessMsgBanner:Locator
    readonly computer:Locator
    

    constructor(page: Page){
        this.page = page;
        this.addComputerBtn = page.getByRole('link', { name: 'Add a new computer' });
        this.sucessMsgBanner = page.locator(".alert-message");
        this.computer = page.getByRole('link', { name: 'ACE' })
    }

    async clickOnAddComputerButton(){
        await this.addComputerBtn.click()
    }

    getBanner():Locator{
       return this.sucessMsgBanner 
    }

    async clickOnComputerLinkFromTheTable(){
        await this.computer.click()
        //await this.computer.nth(0).click()
    }

    async clickComputer() {
        await this.computer.click();
    }

    
}