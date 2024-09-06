import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(searchList:any[],term:string): any[] {
    return searchList.filter((item)=>item.user.toLowerCase().includes(term.toLowerCase()));
  }

}
