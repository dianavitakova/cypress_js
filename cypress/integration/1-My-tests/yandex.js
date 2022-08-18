describe('форма логина', function () {

     it('открытие сайта', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('картинки котят');
        cy.get('.search2__button > .button'). click();
        cy.get('.UniSearchHeader-Title-Text');
     
        })
})