/// <reference types= "cypress" />

describe('Cypress packages', () => {
    it('Cypress Iframe Kullanimi', () => {
        cy.visit('https://practice.expandtesting.com/iframe')

        cy.iframe('#mce_0_ifr').find('p').clear().then(() => {
            cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi').clear().then(() => {
                cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi sil yaz')
            })
        })
        
        cy.iframe('#email-subscribe').find('input[id="email"]').should('be.visible').type('example@example.com')
    });
});