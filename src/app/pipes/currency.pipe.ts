import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        return value + ' ' + environment.currency;
    }

}
