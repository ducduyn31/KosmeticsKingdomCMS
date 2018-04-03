import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDateFormat'
})
export class ToDateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let it = new Date(value);
    return `${it.getMonth()+1} - ${it.getDate()} - ${it.getUTCFullYear()}` ;
  }

}
