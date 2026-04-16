import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'creditCard',
  standalone: true
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return ''

    return value
      .replace(/\s+/g, '')
      .replace(/(\d{4})/g, '$1 - ')
      .trim()
  }
}