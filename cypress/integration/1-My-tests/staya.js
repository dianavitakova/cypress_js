describe('форма логина', function () {

     it('[+]открытие сайта, верный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vivivididi1010@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Klick*12');
        cy.get('.auth-form__submit').click();
        cy.get('.profile-orders__title')
    })
})

describe('форма логина', function () {

     it('[-]открытие сайта, не верный пароль', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vivivididi1010@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Klick*13');
        cy.get('.auth-form__submit').click();
        cy.get('.error-label');
    })
})
