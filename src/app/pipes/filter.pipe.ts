import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], text: string, field: string): any {

    if (text === '') {
      return arr;
    }

    text = text.toLowerCase();

    return arr.filter(item => {
      return item[field].toLowerCase().includes( text );
    });

  }

}
