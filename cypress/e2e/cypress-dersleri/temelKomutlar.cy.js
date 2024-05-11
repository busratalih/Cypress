/// <reference types="cypress" />

const { it } = require("mocha")


describe('Login islemi', () => {
    it('cy.visit, cy.url, cy.go', () => {
        //cy.visit kullanimi
        cy.visit('/')  //baseUrl atandiysa sadece bu sekilde kullanilir
        cy.visit('https://www.google.com') //baseUrl atanmadiysa ana kullanim sekli böyle
        cy.visit({
            url:'/example/pages1/example.html',
            method:'GET',
        })//baseUrl atandiysa url kismina / sonrasi link yazilir. methoda göre islemler yaptrilir

        cy.visit('/')
        //burada bazi test islemleri yapildi
        cy.visit('https://www.example.com') // daha sonra siteye gidildi
        //burada bazi islemler yapilabilir. NOT: saglikli olmaz , tavsiye edilmez


        //cy.url kullanimi

        cy.visit('https://www.example.com')
        cy.url().should('eq', 'https://www.example.com') // burada tam esitlik söz konusu eq kullanilirsa
        cy.url().should('include', 'example.com')  //burada tam example.com iceriyorsa url'de dogrulama tamamlanir. include kullanilirsa


        //cy.go kullanimi
        cy.go('back')  
        cy.go(-1)


        cy.go('forward')
        cy.go(1)
    })



    it('cy.get, cy.contains,  .find', () => {
        //cy.get kullanimi
        //cy.get icerisine sadece xpath ekleyemiyoruz
        //cy.get() sonrasinda mutlaka bir islem yaptırılmalı, aksi halde bir artısı olmayacaktır

        cy.get('.classAdi')
        cy.get('#id')
        cy.get('div > li > ul')
        cy.get('[data-id="testId]')
        cy.get('div.classAdi #id')
        
        cy.get('.classAdi').as('prices')
        cy.get('@prices')

        cy.get('#testId').click()

        //cy.contains kullanimi
    

        cy.contains('Login').click()//sayfa icerisinde login kelimesini bulur ve tiklar. not: birden fazla login kelimesi varsa problem yasanabilir
        cy.get('#testId').contains('Login').click()//testId si icerisinde login kelimesini iceren kısmı bulur ve tıklar


        cy.get('.nav li h1').click()  //.nav class ında li icersinde h1 i bulur ve tıklar
        cy.get('.nav').contains('About').click() // .nav class ı icersinde About iceren kelimeyi bulur ve tıklar


        //.find kullanimi
        cy.get('#parent').find('li').find('.first')

        cy.get('#parent li.first')

        
    })


    it('.click, .type, .clear', () => {
        //.click kullanimi

        cy.click() //yanlis kullanim hata verir , deneme

        cy.get('submitBtn').click()  // bubir dogru click kullnaimidir
        cy.contains('Submit').click() // dogru kullanim
        cy.get('img').click('topRight')
        cy.get('img').click(15, 40)
        cy.get('#inputUsername').click()

        //.type kullanimi
        cy.get('#inputName').type('testUser')
        cy.get('#password').type('abc123{enter}')
        cy.gt('.testClass').type('{enter}')


        cy.get('#comments').type('uzun cumleler, 250 kelime', {delay:0})

        //.clear kullanimi
        cy.get('.nav').clear() //yanlis kullanim

        cy.get('#inputName').type('testUser')
        cy.get('#inputName').clear()
        cy.get('#inputName').type('testUser2')
        cy.get('#inputName').clear()

        cy.get('#comments').type('uzun cumleler, 250 kelime', {delay:0})
        //assertion yapıldı
        cy.get('#comments').clear()


    })

    it('.should', () => {
        //.should kullanımı
        cy.get('#submitBtn').should('be.visible').and('include', 'Giris') // 1. submit butonun dogrulanması ve ardından butonun isminin
        // giris içeren kelimenin oldugunun  dogrulanması
        //include kullanılırsa kelimenin içerilmesi yeterli

        cy.get('#submitBtn').should('be.visible').and('contain', 'Giris') // 1. submit butonun dogrulanması ve ardından butonun isminin
        // giris içeren kelimenin oldugunun  dogrulanması
        //contain yada contains kullanılırsa kelimenin içerilmesi yeterli

        cy.get('#submitBtn').should('be.visible').and('eq', 'Login') // 1. submit butonun dogrulanması ve ardından butonun isminin
        // giris içeren kelimenin oldugunun  dogrulanması
        //eq kullanılacaksa yüzde yüz esitlik olmalı

        cy.get('input').should('be.empty')
        cy.get('input').should('not.have.value', 'Jane')

        cy.contains('Login').should('be.visible')

        cy.get('header').should('have.css', 'font-family').and('match', /serif/)

        cy.get('.classExample').should('not.be.empty')


        cy.get('#testId').should('have.length', 3)




    });


    it('cy.wait', () => {
        //cy.wait() kullanimi

        cy.visit('/')
        cy.wait(1000)
        cy.get('.list>li', { timeout: 10000}).should('be.visible')
        cy.get('#id').should('be.visible')



    });


    it('Onemli bazı momutlar', () => {
        //cy.title

        cy.title().should('eq', 'Sayfanin Basligi')
        cy.title().should('include', 'Sayfanin')


        //cy.log()

        cy.visit('/')
        cy.log('syfaya yonlendirildi')
        cy.get('.nav').find('li').contains('About').click()
        cy.log('About acildi')

        // cy.screenshot()

        cy.screenshot()
        cy.get('.post').screenshot()
        cy.screenshot('../login/basariliLogin/')

        //cy.viewport()

        cy.viewport(1000, 1000)
        cy.viewport('ipad-2')


    });




})


describe('Temel Komutlar Dersimizin Ornek Testi', () => {


it('Dersimizin Ornek Testi', () => {
        cy.viewport(1500, 1500)
        cy.visit('https://demoqa.com/')
        cy.url().should('eq', 'https://demoqa.com/')
        cy.log('url dogrulandi')
        cy.title().should('eq', 'DEMOQA')
        cy.log('title dogrulandi')
        // cy.get('.card.mt-4.top-card').find('.card-body').find('h5').contains('Elements').click() //yontem1
        cy.get('.card.mt-4.top-card .card-body h5').contains('Elements').click()//yontem2
        // cy.contains('Elements').click()//yontem3
        cy.go(-1)
        cy.log('bir onceki sayfaya geri donuldu')
        cy.go(1)
        cy.log('bir sonraki sayfaya gidildi')
        cy.wait(1000)
        cy.get('.accordion').should('be.visible')
        cy.screenshot()
    });


})




