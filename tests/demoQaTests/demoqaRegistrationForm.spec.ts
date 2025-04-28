import {test, expect} from '../../demoqa-fixture'

test.beforeEach(async({page})=>{
    await page.goto("/automation-practice-form")
})


test('Sumit registration form successfully', async ({regForm})=>{
    //wait regForm.CloseBannerIfAvailable()
    await regForm.EnterFirstName("John")
    await regForm.EnterLastName("Doe")
    await regForm.EnterEmail("mail@mail.com")
    await regForm.SelectGender("Male")
    await regForm.EnterMobileNumber("1234567890")
    await regForm.EnterSubjects()
    await regForm.SelectHobbie("Sports")
    await regForm.SelectHobbie("Music")
    await regForm.UploadFile()
    await regForm.EnterCurrentAddress("Address One")
    await regForm.EnterStateAndCity("NCR", "Delhi")
})