
import { Locator, Page } from "@playwright/test";

export class ProductDetailPage{
    readonly page:Page
    private readonly addToCartBtn:Locator
    private readonly productLink:Locator
    private readonly optionLabel = (label: string) => this.page.locator("[class*='add-form']").getByRole('option', {name:label, exact:true})
    public readonly successMsg: Locator;

    constructor(page:Page){
        this.page = page
        this.addToCartBtn = page.getByRole('button',{name:'Add to Cart'})
        this.productLink = page.getByRole('link',{name:'Tiberius Gym Tank', exact:true})
        this.successMsg = this.page.locator("[class*='messages']");
    }

    async clickOnProduct(){
        await this.productLink.first().click()
    }

    async clickAddToCardButtonOnAProduct(){
        await this.addToCartBtn.first().click()
    }

    async selectSize(size:string){
        await this.page.waitForSelector("[class*='add-form']")
        await this.optionLabel(size).click()
    }

    async selectColor(color:string){
        await this.optionLabel(color).click()
    }

    async getTextFromSuccessMsg(){
        return this.successMsg
    }
}