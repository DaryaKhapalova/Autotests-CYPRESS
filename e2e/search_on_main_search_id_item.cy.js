
import { auth } from "C:/autotesting/cypress/support/auth.cy"; 


describe("Main.Search_id_item", () => {
    it("passes_successful", () => {
      cy.visit("/");
  
      auth();

    cy.get('input[type="search"').type("1184668"); //ввести код товара
    cy.wait(1000);
    cy.request('GET','/api/v1/sphinx/search/all-stub-suggestions?text=1184668', {}).
    then ((response) => {
      expect(response.status).to.eq(200)
    }) // запрос возвращает код 200
    // ДОБАВИТЬ ПОЛУЧЕНИЕ ЗНАЧЕНИЯ 1184668 В ОТВЕТЕ
    cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
    contains("Коммутатор Dahua").click(); //кликнуть по товару в подсказке
    cy.wait(2000);
    cy.visit("/products/card/1184668"); // открыть подробную карточку товара
    cy.wait(3000); 
    cy.get('button[class="icon-button--4nwGu undefined"]').
    contains ("Коммутаторы").should('be.exist'); // хлебные крошки содержат категорию "Коммутаторы"
    cy.wait(1000);
    cy.get('h1[class="heading--gKeTb product-view-header__heading--2YFRz heading_size_xl--3qrSh"]').
    should('be.exist'); //на странице есть название товара
    cy.wait(1000);
    cy.get('div[class="card--1SQD5 footnote--bM_Br empty-order__footnote--3mJ8f table-container__header__order--oAr5o empty-order__wrapper--3jdJH"]').
    should('be.exist'); //  на странице есть блок с ценами и доступностью
    cy.wait(1000);
    cy.get('div[class="product-view-header__sub-heading--2NfC3"]').
    should('be.exist'); // на странице есть код товара
    cy.clearCookies()
});
});



describe("Main.Search_id_item", () => {
    it("fails_invalid_id", () => {
      cy.visit("/");
  
      auth();

    cy.get('input[type="search"').type("1184669"); //ввести код товара
    cy.wait(1000);
    cy.get('button[class="icon-button--4nwGu search-input__search-button--3QcJI"]').click();
    //кликнуть по знаку лупы
    cy.get('div[id="not-found"]').should('be.exist'); //товара не найдено
    cy.wait(1000);
    cy.get('div[class="container--1hZC1 home--2RXwy"]').should('be.exist');
    // на странице есть виджет, каталог и др
    cy.clearCookies()
  });
});
