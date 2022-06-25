/// <reference types="Cypress" />

const WelcomeAction = require('../pages/welcome');
const RestaurantsUI = require('../pages/restaurants');

describe('FoodApp: Fluxo completo', function () {
  before(function () {
    cy.fixture('fluxo_feliz').then(function (data) {
      this.data = data;
    });
    cy.visit('/');
  });

  it('Fluxo completo', function () {
    cy.pause();
    WelcomeAction.UI.clicarLinkVerRestaurantes();

    RestaurantsUI.UI.selecionarRestaurante();
  });
});