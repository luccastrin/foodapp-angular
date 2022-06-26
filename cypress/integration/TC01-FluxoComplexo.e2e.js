/// <reference types="Cypress" />

const WelcomeAction = require('../pages/welcome');
const Restaurants = require('../pages/restaurants');
const RestaurantDetail = require('../pages/restaurant-detail');
const Order = require('../pages/order');

describe('FoodApp: Fluxo completo', function () {
  before(function () {
    cy.fixture('fluxo_feliz').then(function (data) {
      this.data = data;
    });
    cy.visit('/');
  });

  it('Fluxo completo', function () {
    WelcomeAction.UI.clicarLinkVerRestaurantes();

    Restaurants.UI.selecionarRestaurante();

    RestaurantDetail.UI.adicionarRestaurante();

    RestaurantDetail.UI.clicarFecharPedido();

    Order.UI.preencherDadosPessoais(
      this.data.nomeCliente,
      this.data.email,
      this.data.confirmacaoEmail
    );

    Order.UI.preencherEndereco(
      this.data.endereco,
      this.data.numero,
      this.data.complemento
    );

    Order.UI.selecionarRadioButton();

    Order.UI.clicarFecharPedido();
  });
});