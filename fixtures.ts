import {test as base} from '@playwright/test'
import { CreateAccountPage } from './page-objects/magentoPages/createAccountPage'
import { ProductDetailPage } from './page-objects/magentoPages/productDetailPage'

type MagentoPages = {
    createAccountPage:CreateAccountPage
    productDetailPage:ProductDetailPage
}

export const test = base.extend<MagentoPages>({
    createAccountPage: async ({page},use)=>{
        await use(new CreateAccountPage(page))
    },

    productDetailPage : async ({page}, use)=>{
        await use(new ProductDetailPage(page))
    }
    
})