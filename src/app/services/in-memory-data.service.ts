import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { CONTENT_LIST } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let parts: IContent[] = CONTENT_LIST;
    return {
      parts
    }
  }
  

  genId(parts: IContent[]): number {
    return parts.length > 0 ? 
      Math.max(...parts.map(part => part.id ?? 0)) + 1 : 1;
  }
}
