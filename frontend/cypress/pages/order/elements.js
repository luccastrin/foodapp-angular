export const ELEMENTS = {
  inputNome: 'input[formControlName="name"]',
  inputEmail: 'input[formControlName="email"]',
  inputConfirmacao: 'input[formControlName="confirm"]',
  inputEndereco: 'input[formControlName="address"]',
  inputNumero: 'input[formControlName="number"]',
  inputComplemento: 'input[formControlName="complement"]',
  inputRadioButtonDinheiro: [
    '.control-radio .radio-button:nth-child(1) > [type="radio"]',
    '.control-radio .radio-button:nth-child(2) > [type="radio"]',
    '.control-radio .radio-button:nth-child(3) > [type="radio"]',
  ],
  botaoConcluirPedido: '.button-success'
}