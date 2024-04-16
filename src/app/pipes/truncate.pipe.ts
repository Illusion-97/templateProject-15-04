import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 10, separator: string = " ..."): string {
    return value.length > limit
      ? value.slice(0,limit) + separator
      : value;
  }

}
