import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT_LIST } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class DronePartService {

  constructor() { }

  getDroneParts() : Observable<IContent[]> {
    return of(CONTENT_LIST);
  }
}
