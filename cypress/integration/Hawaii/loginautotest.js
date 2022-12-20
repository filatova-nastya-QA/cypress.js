
describe('Тестирование формы авторизации сайта staya', function () {


     it('Позитивный тест: открыть главную страницу сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('filatovaa922@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('inner.Out1');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');

        })

})

