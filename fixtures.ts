import {test as base} from '@playwright/test'
import { CreateAccountPage } from './page-objects/magentoPages/createAccountPage'
import { ProductDetailPage } from './page-objects/magentoPages/productDetailPage'
import { HomePage } from './page-objects/magentoPages/homePage'

type MagentoPages = {
    createAccountPage:CreateAccountPage
    productDetailPage:ProductDetailPage
    homePage:HomePage
}

export const test = base.extend<MagentoPages>({
    createAccountPage: async ({page},use)=>{
        await use(new CreateAccountPage(page))
    },

    productDetailPage : async ({page}, use)=>{
        await use(new ProductDetailPage(page))
    },

    homePage: async({page}, use)=>{
        await use (new HomePage(page))
    }
    
})