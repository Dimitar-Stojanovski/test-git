import {test as base} from '@playwright/test'
import { RegistrationFomPage } from './page-objects/demoqaPages/registrationForm'

type DemoQaFixtures ={
    regForm:RegistrationFomPage
}

export const test = base.extend<DemoQaFixtures>({
    regForm : async ({page}, use)=>{
        await use(new RegistrationFomPage(page))
    }
});

export {expect} from '@playwright/test'
