import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, chars: number): string {
    if (chars === 0) { //use 0 for no truncation
      return value;
    }
    if (value.length > chars) {
      let text = `${value.substring(0, chars)}...`;
      return text;
    } else {
      return value;
    }
  }
}
