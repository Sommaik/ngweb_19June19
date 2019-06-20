import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {
  transform(value: string, args?: string): any {
    // value = 1234567890123456
    // args = #
    const value1 = value.substring(0, 3);
    const value3 = value.substring(13, 16);
    let value2 = '';
    for (let i = 0; i < 10; i++) {
      value2 += args;
    }
    return value1 + value2 + value3;
    // 123##########456
  }
}
