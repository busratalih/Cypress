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



    it('Cypress Iframe Kullanimi', { tags: '@iframe' }, () => {
        cy.visit('https://practice.expandtesting.com/iframe')

        cy.iframe('#mce_0_ifr').find('p').clear().then(() => {
            cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi').clear().then(() => {
                cy.iframe('#mce_0_ifr').find('p').type('Cypress iframe dersi sil yaz')
            })
        })

        cy.iframe('#email-subscribe').find('input[id="email"]').should('be.visible').type('example@example.com')
    });

    it('Cypress IF Kullanimi', {tags: '@if'}, () => {
        cy.visit('https://practice.expandtesting.com/login')

        cy.get('input#username').if('visible').type('Test')
        cy.get('input#password').if('visible').type('Deneme')
        cy.wait(500)

        cy.get('#login > .btn').if().contains('button', 'Login').click().then(() => {
            cy.get('#flash-message').if('contain', 'Your username is invalid!').log('Test tamam')
        }).else().log('TEst tamamlanamadi!')
    });
});