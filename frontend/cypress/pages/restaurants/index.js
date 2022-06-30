const pageElements = require('./elements').ELEMENTS;

class RestaurantsUI {
  selecionarRestaurante() {
    cy.get(pageElements.cardRestaurante)
      .should('be.visible')
      .click();
  }
}

module.exports = {
  UI: new RestaurantsUI()
}