import { auth } from "C:/autotesting/cypress/support/auth.cy";

describe('Autorization', () => {
  it('passes_successful', () => {
    cy.visit("/");

    auth();
    cy.get('span[class =user-info__name--aM-Al]').should('contain', 'Автотесты');
    //страница содержит логин пользователя
  })
})

import { invalid_pass } from "../support/invalid_pass.cy";

describe('Autorization', () => {
  it('fails_invalid_pass', () => {

    cy.request('POST','/api/login', {invalid_pass}).
    then ((response) => {
      expect(response.body).to.have.property('auth', false);
    }) // запрос возвращает значение false по параметру auth
    cy.visit("/");
    invalid_pass();
    cy.get('strong[class =text-danger]').should('be.visible'); // на странице текст ошибки
  })
  })


import { invalid_log } from "../support/invalid_log.cy";
describe('Autorization', () => {
  it('fails_invalid_log', () => {

    cy.request('POST','/api/login', {invalid_log}).
    then ((response) => {
      expect(response.body).to.have.property('auth', false);
    }) // запрос возвращает значение false по параметру auth
    cy.visit("/");
    invalid_log();
    cy.get('strong[class =text-danger]').should('be.visible'); // на странице текст ошибки
  })
})

import { invalid_client } from "../support/invalid_client.cy";
describe('Autorization', () => {
  it('fails_invalid_client', () => {
    
    cy.request('POST','/api/login', {invalid_client}).
    then ((response) => {
      expect(response.body).to.have.property('auth', false);
    }) // запрос возвращает значение false по параметру auth
   cy.visit("/");
  invalid_client();
    cy.get('strong[class =text-danger]').should('be.visible'); // на странице текст ошибки
  })
})