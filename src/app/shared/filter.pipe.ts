import { Pipe, PipeTransform } from '@angular/core';

import { Imovie } from '../movies/movie';

@Pipe({
  name: 'filterPipe', 
  pure: true,
})


export class FilterPipe implements PipeTransform {

  transform(objects: Imovie[] | null, search: string): any[]{
    if(!objects){
      return []
    };
    return objects.filter((data)=> 
      data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      data.year.includes(search)
    );
    }
  }
 

