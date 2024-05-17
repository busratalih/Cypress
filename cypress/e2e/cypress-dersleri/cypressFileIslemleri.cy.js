/// <reference types= "cypress" />

describe('Cypress File Islemleri Dersi', () => {
    it('File Upload Islemi - Pozitif Case', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })


        cy.get('#fileInput').should('be.visible').attachFile({filePath: "../fixtures/documents/testDocument.docx"})
        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });


    it('File Upload Islemi - Negatif Case', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })


        cy.get('#fileInput').should('be.visible').attachFile({filePath: "../fixtures/documents/examplePDF.pdf"})
        // if else eklenerek eger 500kb'den kucukse devam et buyukse hata mesaji al!!!
        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });

    it('File Upload Islemi - Ikinci yontem', () => {
        cy.visit('https://practice.expandtesting.com/upload')
        cy.on('uncaught:exception', (err, runnable) => { return false })

        const ornekDosya = "../fixtures/media/test.jpg"

        cy.fixture(ornekDosya)
        .then(Cypress.Blob.base64StringToBlob) // convert islemi yapiliyor
        .then((fileContent) => {
            cy.get('#fileInput').attachFile(
                {fileContent, fileName: ornekDosya, mimeType:'image/**'}, {subjectType: 'input'})
        })

        cy.get('button#fileSubmit').should('be.visible').and('contain', 'Upload').click()
    });
});

describe('Cypress ile File Download', () => {
    before(() => {
        cy.deleteDownloadsFolder()
    });


    it('File Download ve Delete Islemleri', () => {
        cy.visit('https://practice.expandtesting.com/download')
        cy.on('uncaught:exception', (err, runnable) => { return false })

        cy.wait(3000)

        cy.get('[data-testid="1715364403014_cat.jpg"]').click()
    });
});

describe('Write ve Read File islemleri', () => {
    it('Write File Ornek Calisma', () => {
        cy.writeFile('Documents/ornekDosya.docx', 'Hello World')

        cy.writeFile('Documents/notDefteri.txt', 'Hello World \n')
        cy.writeFile('Documents/notDefteri.txt', 'Cypress Derslerine devam ediyoruz. \n', {flag:"a+"})
        cy.writeFile('Documents/notDefteri.txt', 'Bugunku konumuz file islemleri', {flag:"a+"})
    });

    it('Read File Ornek Calisma', () => {
        cy.readFile('Documents/notDefteri.txt').should('contain', 'Hello World')
        cy.readFile('Documents/ornekDosya.docx').should('eq', "Hello World")
        cy.readFile('Documents/notDefteri.txt').then((yazi) => {
            expect(yazi).to.equal('Hello World \nCypress Derslerine devam ediyoruz. \nBugunku konumuz file islemleri')
        })
    });
});


