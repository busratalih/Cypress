/// <reference types= "cypress" />

import homepage from "../../support/pageObjects/homePage/homepage";

import login from "../../support/pageObjects/login/login";

describe('Page Object Kullanimina bir ornek', () => {
    it('Login Testi', () => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        homepage.navigate()
        homepage.verifyUrl('automationtesting')
        homepage.veriyTitle('My Account – Automation Practice Site')

        //page object login dosyasında return this kullanıldıgında login. deyip zincirleme yazılabilir
        login.fillUsername('Test')
        login.fillPassword('1123456')
        login.LoginBtn('Login')

        // Error mesaji
        login.errorMsg('Test')
        
    });
    
});