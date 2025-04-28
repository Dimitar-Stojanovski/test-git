import { Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async hoverMenMenu() {
        await this.page.getByRole('menuitem', { name: /Men/i }).nth(1).hover();
    }

    async clickTops() {
        await this.page.getByRole('menuitem', { name: /Tops/i }).first().click();
    }

    async navigateToMenTops() {
        await this.hoverMenMenu();
        await this.clickTops();
    }
}