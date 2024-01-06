
import { auth } from "C:/autotesting/cypress/support/auth.cy";


describe("Catalog.Filter_by_name", () => {
  it("passes_successful", () => {
    cy.visit("/");

    auth();

    cy.visit ("/orders/new");
    cy.wait(2000);
    cy.get('span[class="catalog__category-name--2hal6"]').
    contains ("Ноутбуки и планшеты").first().click({force:true}); //кликнуть "Ноутбуки и планшеты"
    cy.wait(1000);
    cy.get('div[class="catalog__sub-category-header--9O-3B"]').
    contains("Ноутбуки").first().click({force:true}); //кликнуть "Ноутбуки"
    cy.wait(7000);
    cy.get('input[placeholder="Фильтр по названию или PartN, например USB*G6"]').click({force: true}).
    type("lenovo"); //указать валидное значение (lenovo)
    cy.wait(5000);
    cy.get('div[data-id="brand"]').
    contains("LENOVO").should("be.visible"); //результат содержит "lenovo"
    cy.wait(3000); 
    cy.get('div[class="item-column--2ggGc"]').should("not.have.value", 'DIGMA');
    cy.wait(3000); //результат не содержит "digma"
    cy.clearCookies()
    
});
});

describe("Catalog.Filter_by_name", () => {
    it("fails_not_avail_name", () => {
      cy.visit("/");
  
      auth();
  
      cy.visit ("/orders/new");
      cy.wait(2000);
      cy.get('span[class="catalog__category-name--2hal6"]').
      contains ("Ноутбуки и планшеты").first().click({force:true}); //кликнуть "Ноутбуки и планшеты"
      cy.wait(1000);
      cy.get('div[class="catalog__sub-category-header--9O-3B"]').
      contains("Ноутбуки").first().click({force:true}); //кликнуть "Ноутбуки"
      cy.wait(7000);
      cy.get('input[placeholder="Фильтр по названию или PartN, например USB*G6"]').click({force: true}).
      type("cactus"); //указать невалидное значение
      cy.wait(3000);
      cy.get ('div[class="ReactVirtualized__Grid ReactVirtualized__List items-virtual-list--330jF"]').
      should ("be.exist"); // на странице нет товаров 
      cy.clearCookies()
  });
  });

  describe("Catalog.Filter_by_brand", () => {
    it("passes_successful", () => {
      cy.visit("/");
  
      auth();
  
      cy.visit ("/orders/new");
      cy.wait(2000);
      cy.get('span[class="catalog__category-name--2hal6"]').
      contains ("Ноутбуки и планшеты").first().click({force:true}); //кликнуть "Ноутбуки и планшеты"
      cy.wait(1000);
      cy.get('div[class="catalog__sub-category-header--9O-3B"]').
      contains("Ноутбуки").first().click({force:true}); //кликнуть "Ноутбуки"
      cy.wait(7000);
      cy.get('span[class="filters__item--1nKwi"]').
      contains('Бренд').click(); //кликнуть бренд
      cy.wait(3000);
      cy.get('label[class="label--22Ppw menu__label--3Aqgu"]').
      contains("DIGMA").click(); //выбрать DIGMA
      cy.wait(3000);
      cy.get('button[class="button--2sm0S menu__submit--2sn6K button--secondary--1LphU"]').
      contains("Применить фильтры").first().click(); // кликнуть Применить
      cy.wait(3000);
      cy.get('div[class="item-column--2ggGc"]').contains("DIGMA").should("be.visible");
      cy.wait(3000); // результат содержит "digma"
      cy.get('div[class="item-column--2ggGc"]').should("not.have.value", 'LENOVO');
      cy.wait(3000); //результат не содержит "lenovo"
      cy.clearCookies()
  });
  });

 
 

  