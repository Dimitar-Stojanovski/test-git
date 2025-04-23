import{expect} from '@playwright/test'
import {test} from '../../fixtures.ts'
import { CreateAccountPage } from '../../page-objects/magentoPages/createAccountPage';
import { CreateAccountData } from '../../utils/createAccountData';

let createAccountPage:CreateAccountPage


test.beforeEach(async ({page})=>{
    //await page.goto("/");
    await page.goto("/customer/account/create/");
    createAccountPage = new CreateAccountPage(page)
})

test("Create Account test", async ({page})=>{
    
    await createAccountPage.enterRegistrationForm(CreateAccountData)
    await createAccountPage.clickCreateAccountBtn()
    await expect(createAccountPage.successMsg).toHaveText("Thank you for registering with Main Website Store.")
    await expect(createAccountPage.logedInMessage).toHaveText(`Welcome, ${CreateAccountData.firstName} ${CreateAccountData.lastName}!`)
})

test('Add product to cart',async({productDetailPage})=>{

})

