import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sitesFilter'
})
export class SitesFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
