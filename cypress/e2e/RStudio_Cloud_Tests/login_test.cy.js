/// <reference types="cypress" />

describe( "rstudio cloud locator",() => { 

    //function to visit the Rstudio login page using the url
    it("visit Rstudio login page", ()=> {
        cy.visit('https://login.rstudio.cloud/login');
    });

    //function to locate the email login input field 
    it("locate the input for email address ", ()=> {

        //get the input by input type with an assret 'shoulb be.visible' and the value 
        //should be empty. Timeout for 5 second until the assertion is available.If timeout
        //not specified it will honor the default timeout which is 4 seconds   
        cy.get('input[type="email"]', {time:5000})
        .should("be.visible")
        .and("have.value","")
        .focus()
        .click()
        .type('email_address_login');
    });

    it('click on continue ', ()=>{
        cy.get('.fullPageFormContainer > :nth-child(2) > .actions > button')
        .click();
        cy.get('input[type="password"]', {time:50000})
        .click().type("password");
        cy.get('.actions > button').should('be.visible').click(),{time:50000};
        cy.get('#entry > div > div:nth-child(2) > div > a.appPicker.cloud.noLink > span').click();

    });
} );

