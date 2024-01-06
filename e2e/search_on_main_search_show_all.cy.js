import { auth } from "C:/autotesting/cypress/support/auth.cy";




describe("Main", () => {
    it("passes_successfull", () => {
      cy.visit("/");
  
      auth();

      cy.visit ("/");
    cy.wait(1000);
    cy.get('input[type="search"').type("dahua"); //ввести бренд товара
    cy.wait(3000);
    cy.get('div[class="search-hints--1ri6T search-hints--opened--2jw0d"]').
    contains("Показать все результаты поиска").click(); //кликнуть показать все  в подсказке
    cy.wait(4000);
    cy.get('button[class="icon-button--4nwGu"]').
    contains ("Каталог").should('be.exist'); // хлебные крошки содержат "Каталог"
    cy.wait(1000);
    cy.get ('button[class="button--2sm0S good-list-item__expand-btn--2aOMP good-list-item__expand-btn--compact--1WHga button--ternary--b_l9p"]').
    should (($lis) => {expect($lis).to.have.length.greaterThan(0)}); // кол-во товаров больше 0
    cy.clearCookies()
});
});