import { Pipe, PipeTransform } from '@angular/core';
import { IContent } from '../models/icontent';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contents: IContent[], arg?: string): IContent[] {
    let filterd = new Array<IContent>();
    for (let i = 0; i < contents.length; i++) {
      if (arg != null) {
        if (contents[i].type == arg)
          filterd.push(contents[i]);
      } else {
        if (contents[i].type == "")
          filterd.push(contents[i]);
      }
    }
    return filterd;
  }

}
