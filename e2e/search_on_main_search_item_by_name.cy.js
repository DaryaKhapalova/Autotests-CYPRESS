
import { auth } from "C:/autotesting/cypress/support/auth.cy";

 

describe("Main.Search_item_by_name", () => {
    it("passes_successfull", () => {
      cy.visit("/");
  
      auth();

    cy.get('input[type="search"').type("Монтажная коробка Dahua DH-VTM115"); //ввести имя товара
    cy.wait(1000);
    cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
    contains("Монтажная коробка Dahua").click(); //кликнуть по товару в подсказке
    cy.wait(2000);
    cy.visit("/products/card/1418547"); // открыть подробную карточку товара
    cy.wait(4000); 
    cy.get('button[class="icon-button--4nwGu undefined"]').
    contains ("Аксессуары для видеонаблюдения").should('be.exist'); // хлебные крошки содержат категорию "Аксессуары"
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

describe("Main.Search_item_by_name", () => {
  it("passes_successfull", () => {
    cy.visit("/");

    auth();

  cy.get('input[type="search"').type("ноут"); //ввести "ноут"
  cy.wait(1000);
  cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
  contains("Товары"); //есть раздел "Товары"
  cy.wait(1000);
  cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
  contains("Категории"); // есть раздел "Категории"
});
});

describe("Main.Search_item_by_name", () => {
  it("passes_successfull", () => {
    cy.visit("/");

    auth();

  cy.get('input[type="search"').
  type("Ноутбук GMNG Rush Core i7 12700H 32Gb SSD1Tb NVIDIA GeForce RTX 3060 6Gb 15.6 QHD (2560x1440) noOS dk.grey WiFi BT Cam 3410mAh (MN15P7-BEСN02)"); 
  //ввести имя товара
  cy.wait(1000);
  cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
  contains("Ноутбук GMNG Rush").click(); //кликнуть по товару в подсказке
  cy.wait(2000);
  cy.visit("/products/card/1898159"); // открыть подробную карточку товара
  cy.wait(4000); 
  cy.get('button[class="icon-button--4nwGu undefined"]').
  contains ("Ноутбуки").should('be.exist'); // хлебные крошки содержат категорию "Ноутбуки"
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

describe("Main.Search_item_by_name", () => {
  it("fails_invalid_name", () => {
    cy.visit("/");

    auth();
    cy.get('input[type="search"').type("платье"); //ввести имя товара
    cy.wait(1000);
    cy.get('button[class="icon-button--4nwGu search-input__search-button--3QcJI"]').click();
    //кликнуть по знаку лупы
    cy.get('div[id="not-found"]').should('be.exist'); //по запросу не найдено
    cy.wait(1000);
    cy.get('div[class="container--1hZC1 home--2RXwy"]').should('be.exist');
    // на странице есть виджет, каталог и др
    cy.clearCookies()
  });
});

describe("Main.Search_item_by_name", () => {
  it("fails_invalid_symbol", () => {
    cy.visit("/");

    auth();
    cy.get('input[type="search"').type("===-'''"); //ввести имя товара
    cy.wait(1000);
    cy.get('button[class="icon-button--4nwGu search-input__search-button--3QcJI"]').click();
    //кликнуть по знаку лупы
    cy.get('div[id="not-found"]').should('be.exist'); //по запросу не найдено
    cy.wait(1000);
    cy.get('div[class="container--1hZC1 home--2RXwy"]').should('be.exist');
    // на странице есть виджет, каталог и др
    cy.clearCookies()
  });
});

describe("Main.Search_item_by_name", () => {
  it("fails_random_name", () => {
    cy.visit("/");

    auth();
    cy.get('input[type="search"').type("yjen,er"); //ввести имя товара
    cy.wait(1000);
    cy.get('button[class="icon-button--4nwGu search-input__search-button--3QcJI"]').click();
    //кликнуть по знаку лупы
    cy.get('div[id="not-found"]').should('be.exist'); //по запросу не найдено
    cy.wait(1000);
    cy.get('div[class="container--1hZC1 home--2RXwy"]').should('be.exist');
    // на странице есть виджет, каталог и др
    cy.clearCookies()
  });
});