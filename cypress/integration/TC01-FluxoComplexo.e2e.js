/// <reference types="Cypress" />

describe('FoodApp: Fluxo completo', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
    cy.visit('/');
  });

  it('Fluxo completo', function () {
  });
});