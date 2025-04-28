import { th } from "@faker-js/faker";
import { Page } from "@playwright/test";
import path from "path";


export class RegistrationFomPage{
    private readonly page:Page

    private readonly firstNameInput = () => this.page.getByPlaceholder("First Name")
    private readonly lastNameInput = ()=> this.page.getByPlaceholder("Last Name")
    private readonly emailInput = ()=>this.page.locator("#userEmail")
    private readonly genderRadio = (gender:string)=> this.page.getByRole('radio',{name:gender, exact:true})
    private readonly mobileNumber = ()=> this.page.getByPlaceholder("Mobile Number")
    private readonly subjectsInput = () => this.page.locator("#subjectsInput")
    private readonly checkBoxInput = (checkbox:string) => this.page.getByRole('checkbox',{name:checkbox, exact:true})
    private readonly uploadFile = () => this.page.locator("#uploadPicture")
    private readonly currentAddressInput = () => this.page.getByPlaceholder("Current Address")
    private readonly stateInput = () => this.page.locator("#react-select-3-input")
    private readonly cityInput = () => this.page.locator("#react-select-4-input")

    private readonly subjects: string [] = ["Maths", "English"]


    constructor(page:Page){
        this.page = page
    }

    async EnterFirstName(name:string){
        await this.firstNameInput().fill(name)
    }

    async EnterLastName(lastname:string){
        await this.lastNameInput().fill(lastname)
    }

    async EnterEmail(mail:string){
        await this.emailInput().fill(mail)
    }

    async SelectGender(gender:string){
        await this.genderRadio(gender).check({force:true})
    }

    async EnterMobileNumber(number:string){
        await this.mobileNumber().fill(number)
    }

    async EnterSubjects(){
        for(const subject of this.subjects){
            await this.subjectsInput().fill(subject)
            await this.subjectsInput().press("Enter")
        }
    }

    async SelectHobbie(hobbie:string){
        await this.checkBoxInput(hobbie).check({force:true})
    }

    async UploadFile(){
        await this.uploadFile().scrollIntoViewIfNeeded()
        const uploadFilePromise = this.page.waitForEvent('filechooser')
        await this.uploadFile().click()
        const fileChooser = await uploadFilePromise;
        await fileChooser.setFiles(path.join(__dirname, '../../utils/playwrightCommands.txt'))
    }

    async EnterCurrentAddress(address:string){
        await this.currentAddressInput().fill(address)
    }

    async EnterStateAndCity(state:string, city:string){
        await this.stateInput().scrollIntoViewIfNeeded()
        await this.stateInput().fill(state)
        await this.stateInput().press("Enter")

        await this.cityInput().fill(city)
        await this.cityInput().press("Enter")
    }

    async CloseBannerIfAvailable(){
        await this.page.addLocatorHandler(
            this.page.locator("#fixedban"),
            async ()=>{
                await this.page.locator("#close-fixedban").click()
            }
        )
    }
}