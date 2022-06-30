const pageElements = require('./elements').ELEMENTS;

class RestaurantDetail {
  adicionarRestaurante() {
    cy.get(pageElements.linkAdicionarRestaurante)
      .should('be.visible')
      .click({ multiple: true });
  }

  clicarFecharPedido() {
    cy.get(pageElements.botaoFecharPedido)
      .should('be.visible')
      .click();
  }
}

module.exports = {
  UI: new RestaurantDetail()
}