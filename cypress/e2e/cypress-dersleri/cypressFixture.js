/// <reference types= "cypress" />


import homepage from "../../support/pageObjects/homePage/homepage";

import credentials from "../../fixtures/credentials.json"


import text from "../../fixtures/text.json"
describe('Cypress Fixture Dersi', () => {
    it('Fixture Ornek Kullanim-1', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        homepage.navigate()
        homepage.verifyUrl(text.url)
        homepage.veriyTitle(text.title) 

        cy.fixture('userData').its('data').then(user => {
            const username=user.username
            const password=user.password
            cy.login3(username, password, text.loginButonDegeri)
        })
    });

    it('Fixture Ornek Kullanim-2', () => {
        cy.navigatePage()
        cy.verifyUrlAndTitle(text.url , text.title)
        cy.login3(credentials.username, credentials.password, text.loginButonDegeri)


    });

    it('Fixture Ornek Kullanim-3', () => {
        cy.navigatePage()
        cy.verifyUrlAndTitle(text.url , text.title)
        cy.fixture("credentials").as(!kullaniciVerileri)
        cy.get('@kullaniciVerileri').then((data) => {
            cy.login3(data.username, data.password, text.loginButonDegeri)
        })
         
    });

    it('Fixture Ornek Kullanim-4', () => {
        cy.navigatePage()
        cy.verifyUrlAndTitle(text.url , text.title)
        cy.login2()


    });

    it('Fixture Ornek Kullanim - 5', () => {
        cy.fixture("veriler/bilgiler").then((values) => {
            const degerKarsilastirma = values[0].veri1

            cy.degerleriDogrula(degerKarsilastirma.id, degerKarsilastirma.isim, degerKarsilastirma.status)
        })
    });

    it('Fixture Ornek Kullanim - 6', () => {
        cy.fixture("media/test.jpg")
        .then((Cypress.Blob.base64StringToBlob))
        .then((fileContent) => {
            cy.get('element id yada class eklenir').attachFile()
        })
    });

    it('Fixture Ornek Kullanim - 7', () => {
        cy.get('element id yada class alindi').attachFile({filePath: 'media/test.jpg'})
    });



    
});