/// <reference types="cypress" />

/// Яндекс.метро мониторинг доступности красной ветки [+] 
describe("Красная ветка - доступность", () => {
    beforeEach(() => {
cy.visit("https://yandex.ru/metro/moscow")
    })

    it("Проложить путь по красной ветке",() => {
        cy.get("svg:nth-child(2) > g:nth-child(76) > text:nth-child(4) > tspan").click(),
        cy.get("svg:nth-child(2) > g:nth-child(304) > text:nth-child(4) > tspan:nth-child(2)").click(),
        cy.get("div:nth-child(1) > div > div > span.metro-dialog-view__station-text").click(),
        cy.contains("Ещё 24 станции")
            })

})

/// <reference types="cypress" />

/// Яндекс.метро мониторинг негативный сценарий конечной точки [-] 
describe("Указать несуществующую станцию", () => {
    beforeEach(() => {
cy.visit("https://yandex.ru/metro/moscow")
    })

    it("Указать в маршруте несуществующую станцию",() => {
        /// Нахожу все элементы с тегами
        cy.get("svg:nth-child(2) > g:nth-child(76) > text:nth-child(4) > tspan").click(),
        cy.get("[class='metro-input-form__stop-suggest _type_to']").type('Новоелдово{Enter}'),
        cy.contains("Вы не задали точку маршрута")
            })

})