const pageElements = require('./elements').ELEMENTS;

class OrderUI {
  preencherDadosPessoais(nome, email, confirmacao) {
    cy.get(pageElements.inputNome)
      .should('be.visible')
      .type(nome);

    cy.get(pageElements.inputEmail)
      .should('be.visible')
      .type(email);

    cy.get(pageElements.inputConfirmacao)
      .should('be.visible')
      .type(confirmacao);
  }

  preencherEndereco(endereco, numero, complemento) {
    cy.get(pageElements.inputEndereco)
      .should('be.visible')
      .type(endereco);

    cy.get(pageElements.inputNumero)
      .should('be.visible')
      .type(numero);

    cy.get(pageElements.inputComplemento)
      .should('be.visible')
      .type(complemento);
  }

  selecionarRadioButton() {
    cy.get(pageElements.inputRadioButtonDinheiro[0])
      .should('be.visible')
      .check();
  }

  clicarFecharPedido() {
    cy.get(pageElements.botaoConcluirPedido)
      .should('be.visible')
      .click();
  }
}

module.exports = {
  UI: new OrderUI()
}