import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormat implements PipeTransform {

  transform(value: number): string {
    let moneySign = 'R$';
    let value2 = value.toString().replace('.', ',');

    if (!value2.includes(',')) {
      return (`${moneySign} ${value2},0`);
    }

    return (`${moneySign} ${value2}`);
  }
}
