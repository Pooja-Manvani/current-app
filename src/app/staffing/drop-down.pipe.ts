import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'dropDown'
})
export class DropDownPipe implements PipeTransform {

  transform(value: any, array: any[]): string {
    return array.find((data) => {
      return data.Id == value
    })?.Name;
  }

}
