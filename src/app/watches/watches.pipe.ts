import { PipeTransform, Pipe } from '@angular/core';
import { WatchesModel } from './watches.model';

@Pipe({
  name: 'filter'
})
export class WatchesPipe implements PipeTransform {
  transform(value: WatchesModel[], filterString: string) {
    const resutArray: WatchesModel[] = [];
    if (filterString === '') {
      return value;
    }
    for (const v of value) {
      if (v.brand.toLowerCase().includes(filterString)) {
        resutArray.push(v);
      }
    }
    return resutArray;
  }



}
