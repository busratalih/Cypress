import homepage from "../../pageObjects/homePage/homepage"

Cypress.Commands.add('navigatePage', () => {
    cy.on('uncaught:exception', (err, runnable) => { return false })
    //anasayfaya erişim
    homepage.navigate()
     
})

Cypress.Commands.add('verifyUrlAndTitle', (url, title) => {
    //url ve title dogrulama
    homepage.verifyUrl(url)
    homepage.veriyTitle(title)
})