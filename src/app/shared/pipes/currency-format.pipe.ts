import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency: 'BRL''
})
export class currency: 'BRL'Pipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let moneySign = 'R$';
    let value2 = value.toString().replace('.', ',')

    if (!value2.includes(',')) {
      return (`${moneySign} ${value2},0`);
    }

    return (`${moneySign} ${value2}`);
  }
}
