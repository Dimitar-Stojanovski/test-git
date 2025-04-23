
import { Locator, Page } from "@playwright/test";

export class ProductDetailPage{
    readonly page:Page
    readonly addToCartBtn:Locator

    constructor(page:Page){
        this.page = page
        this.addToCartBtn = page.getByRole('button',{name:'Add to Cart'})
    }

    async clickAddToCardButtonOnAProduct(index:number){
        await this.addToCartBtn.nth(index).click()
    }
}