import {faker} from '@faker-js/faker'

export const CreateAccountData={
    firstName:faker.person.firstName(),
    lastName:faker.person.lastName(),
    email:faker.internet.email(),
    password:"Password1234"
}