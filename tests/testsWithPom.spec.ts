import {expect, test} from '@playwright/test';
import {CreateComputerPage} from '../page-objects/computerGatlingPages/createComputerPage.ts';
import addComputerData from '../test-data/addComputerData.json';
import { HomePage } from '../page-objects/computerGatlingPages/homePage';

var homePage:HomePage
var createComputerPage:CreateComputerPage

test.beforeEach(async ({page})=>{
    await page.goto("https://computer-database.gatling.io/computers");
    homePage = new HomePage(page)
    createComputerPage = new CreateComputerPage(page)
})

test('Add new computer using POM', async({page})=>{
    await homePage.clickOnAddComputerButton()
    await createComputerPage.enterComputerName("Test Computer")
    await createComputerPage.enterIntroduced("2023-10-01")
    await createComputerPage.enterDiscontinued("2023-10-31")
    await createComputerPage.selectCompany('RCA')
    await createComputerPage.clickAddNewComputerBtn()
    await expect(homePage.getBanner()).toHaveText("Done !  Computer Test Computer has been created")
})

addComputerData.forEach((computer)=>{
    test(`Create computer ${computer.computerName} using data from JSON with POM`, async({page})=>{
       
        await homePage.clickOnAddComputerButton();
        await createComputerPage.enterComputerName(computer.computerName);
        await createComputerPage.enterIntroduced(computer.introduced);
        await createComputerPage.enterDiscontinued(computer.discontinued);
        await createComputerPage.selectCompany(computer.company);
        await createComputerPage.clickAddNewComputerBtn();
        await expect(homePage.getBanner()).toHaveText(`Done !  Computer ${computer.computerName} has been created`);
        await expect(homePage.sucessMsgBanner).toHaveText(`Done !  Computer ${computer.computerName} has been created`);
    });
});

test('Delete computer from the table', async({page})=>{
    await homePage.clickOnComputerLinkFromTheTable()
    await createComputerPage.clickDeleteComputerBtn()
    await expect(homePage.getBanner()).toHaveText(`Done !  Computer ACE has been deleted`);
})