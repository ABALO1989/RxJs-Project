import { Pipe, PipeTransform } from '@angular/core';

import { Imovie } from '../movies/movie';

@Pipe({
  name: 'filterRankingPipe', 
  pure: true,
})


export class FilterRankingPipe implements PipeTransform {

  transform(objects: Imovie[] | null, value: string): any[]{
    if(!objects){
      return []
    };
    
    return objects.filter(data=> data.rank == value);

    }
  }
 

