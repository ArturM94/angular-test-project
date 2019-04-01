import { Pipe, PipeTransform } from '@angular/core';
import { Teammate } from '../models/teammate';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(team: Teammate[], searchValue: string): Teammate[] {
    return team.filter(teammate => teammate.fullName.includes(searchValue));
  }

}
