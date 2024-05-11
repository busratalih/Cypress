/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homePage/homepage";

describe('Cypress CustomCommands Kullanimi 1', () => {
    it('Ornek Kullanim', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.veriyTitle('My Account – Automation Practice Site') 

        cy.login()
        
        
    });


    it('Ornek Kullanim2', () => {
       
       cy.navigatePage()
       cy.verifyUrlAndTitle('automationtesting' , 'My Account – Automation Practice Site')

        cy.login3('deneme123@test.com', 'Deneme12345', 'Login')
        
    });


    it('Ornek Kullanim 3', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        // Anasayfaya erisim ve url baslik dogrulama
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.verifyTitle('My Account – Automation Practice Site')
        cy.login2()
    });
});

