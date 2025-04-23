import { Page, Locator } from "@playwright/test";
import { CreateAccountData } from "../../utils/createAccountData";


export class CreateAccountPage{
    readonly page:Page
    readonly firstNameInput:Locator
    readonly lastNameInput:Locator
    readonly emailInput:Locator
    readonly passwordInput:Locator
    readonly confirmPasswordInput:Locator
    readonly submitButton:Locator
    readonly successMsg:Locator
    readonly logedInMessage:Locator
    
    constructor(page:Page){
        this.page = page
        this.firstNameInput = page.getByRole('textbox',{name:"First Name*"})
        this.lastNameInput = page.getByRole('textbox',{name:"Last Name*"})
        this.emailInput = page.getByRole('textbox',{name:/Email/i})
        this.passwordInput = page.getByRole('textbox', {name:"Password*",exact:true})
        this.confirmPasswordInput = page.getByRole('textbox', {name:/Confirm Password/i})
        this.submitButton = page.locator("[title='Create an Account']")
        this.successMsg = page.locator("[class*='messages']").first()
        this.logedInMessage = page.getByRole('banner').getByText(/Welcome,/i)


    }

    async enterRegistrationForm(user: typeof CreateAccountData){
        await this.firstNameInput.fill(CreateAccountData.firstName)
        await this.lastNameInput.fill(CreateAccountData.lastName)
        await this.emailInput.fill(CreateAccountData.email)
        await this.passwordInput.fill(CreateAccountData.password)
        await this.confirmPasswordInput.fill(CreateAccountData.password)
        
    }

    

    async clickCreateAccountBtn(){
        await this.submitButton.click()
    }

    async enterFirstName(name:string){
        await this.firstNameInput.fill(name)
    }
}