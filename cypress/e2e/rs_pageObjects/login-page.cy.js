///<reference type ="cypress">
import {userNameTextfield,
    passwordTextFiled,
    continueButton, 
    loginButton, 
    
} from "/.locators/login-page-locators.cy.js"

export function naviage () {
    cy.visit('/baseUrl')
}
export function login(username, password) {
    cy.get(userNameTextField).type(username)
    cy.get(continueButton).click()
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
}