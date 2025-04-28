import { Locator, Page } from "@playwright/test";

export class CreateComputerPage{
    readonly page:Page
    readonly computerNameInput:Locator
    readonly introducedDateInput:Locator
    readonly discontinuedDateInput:Locator  
    readonly companyDropdown:Locator
    readonly createComputerBtn:Locator
    readonly deleteComputerBtn:Locator

    constructor(page:Page){
        this.page = page
        this.computerNameInput = page.getByLabel("Computer name");
        this.introducedDateInput =  page.getByLabel("Introduced")
        this.discontinuedDateInput = page.getByRole('textbox', { name: 'Discontinued' });
        this.companyDropdown = page.getByRole('combobox', { name: 'Company' });
        this.createComputerBtn = page.getByRole('button', {name:'Create this computer'});
        this.deleteComputerBtn = page.getByRole('button', { name: 'Delete this computer' })
    }

    async enterComputerName(computer:string){
        await this.computerNameInput.fill(computer)
    }

    async enterIntroduced(introduced:string){
        await this.introducedDateInput.fill(introduced)
    }

    async enterDiscontinued(discontinued:string){
        await this.discontinuedDateInput.fill(discontinued)
    }

    async selectCompany(company:string){
        await this.companyDropdown.selectOption(company)
    }

    async clickAddNewComputerBtn(){
        await this.createComputerBtn.click()
    }

    async clickDeleteComputerBtn(){
        await this.deleteComputerBtn.click()
    }

    async clickToAddRemoveComputer(isDeleteButton:boolean=false){
       if(isDeleteButton)
         await this.deleteComputerBtn.click()
       else
         await this.createComputerBtn.click()   

    }
}