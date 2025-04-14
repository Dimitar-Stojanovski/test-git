import {expect, test} from '@playwright/test';
import addComputerData from '../test-data/addComputerData.json';

test.beforeEach(async ({page})=>{
    await page.goto("https://computer-database.gatling.io/computers");
})

test("Verify page title", async ({page})=>{
    await expect(page).toHaveTitle("Computers database");
})

test("Add a new computer and verify the computer is added", async ({page})=>{

    const addComputerButton = page.getByRole('link', { name: 'Add a new computer' });
    await addComputerButton.click();

    const computerNameInput = page.getByLabel("Computer name");
    await computerNameInput.fill("Test Computer");

    const introducedDateInput = page.getByLabel("Introduced")
    await introducedDateInput.fill("2023-10-01");

    const discontinuedDateInput = page.getByRole('textbox', { name: 'Discontinued' });
    await discontinuedDateInput.fill("2023-10-31");

    const compoanyDropdown = page.getByRole('combobox', { name: 'Company' });
    await compoanyDropdown.selectOption("RCA")

    const createComputerButton = page.getByRole('button', {name:'Create this computer'});
    await createComputerButton.click();

    const successMessage = page.locator(".alert-message");
    await expect(successMessage).toHaveText("Done !  Computer Test Computer has been created");
    await expect(successMessage).toContainText("Computer Test Computer has been created");
    


})

addComputerData.forEach((computer)=>{
    test(`Create computer ${computer.computerName} using data from JSON`, async ({page})=>{
        const addComputerButton = page.getByRole('link', { name: 'Add a new computer' });
    await addComputerButton.click();

    const computerNameInput = page.getByLabel("Computer name");
    await computerNameInput.fill(computer.computerName);

    const introducedDateInput = page.getByLabel("Introduced")
    await introducedDateInput.fill(computer.introduced);

    const discontinuedDateInput = page.getByRole('textbox', { name: 'Discontinued' });
    await discontinuedDateInput.fill(computer.discontinued);

    const compoanyDropdown = page.getByRole('combobox', { name: 'Company' });
    await compoanyDropdown.selectOption(computer.company)

    const createComputerButton = page.getByRole('button', {name:'Create this computer'});
    await createComputerButton.click();

    const successMessage = page.locator(".alert-message");
    await expect(successMessage).toHaveText(`Done !  Computer ${computer.computerName} has been created`);
    await expect(successMessage).toContainText(`Computer ${computer.computerName} has been created`);

    })
})

test('Verify the results are correct after filtering a computer', async ({page})=>{
    const searchinput = page.getByPlaceholder('Filter by computer name');
    await searchinput.fill("ACE");
    const filterByNameButton = page.getByRole('button', { name: 'Filter by name' });
    await filterByNameButton.click();

    const computerLinks  = page.locator('tbody td a');
    await expect(computerLinks).toHaveCount(6);

     var numberOfComputerLinks= await computerLinks.count();
     const filterMessage = page.getByRole('heading', { name: 'computers found'}); 
     
     //await expect(filterMessage).toHaveText(numberOfComputerLinks.toString() + 'computers found');
     await expect(filterMessage).toHaveText(`${numberOfComputerLinks} computers found`);
     await expect(filterMessage).toContainText(`${numberOfComputerLinks}`);
    
})