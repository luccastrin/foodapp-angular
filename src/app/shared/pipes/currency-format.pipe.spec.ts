import { CurrencyFormat } from './currency-format.pipe';

describe('CurrencyFormat', () => {

  it('create an instance', () => {
    const pipe = new CurrencyFormat();
    expect(pipe).toBeTruthy();
  });
});
