const pageElements = require('./elements').ELEMENTS;

class WelcomeUI {
  clicarLinkVerRestaurantes() {
    cy.get(pageElements.linkRestaurantes)
      .should('be.visible')
      .click();
  }
}

module.exports = {
  UI: new WelcomeUI()
}