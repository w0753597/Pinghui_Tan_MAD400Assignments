import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { isNgContent } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { CONTENT_LIST } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class DronePartService {
  private INVALID_PART: IContent = { id: -1, name: "", author: "", type: "" };

  constructor(private http: HttpClient) { }

  /**
   * Get all parts
   * 
   * @returns an observable of all parts
   */
  getDroneParts(): Observable<IContent[]> {
    // return of(CONTENT_LIST);
    return this.http.get<IContent[]>("api/parts")
  }

  /**
   * Get the drone part with the specified id
   * 
   * @param id part id
   * @returns observable of the part, or the INVALID_PART
   */
  getDronePart(id: number): Observable<IContent> {
    //let idx = this.getFirstIdx(id);
    //return of(idx != -1 ? CONTENT_LIST[idx] : this.INVALID_PART);
    return this.http.get<IContent>("api/parts/" + id);
  }

  /**
   * Add a new part to the part list
   * 
   * If the part does no exists, it is added at the end of the list,
   * otherwise, nothing is done.
   * 
   * @param part the part to add
   * @returns observable of the part list after adding
   */
  addDronePart(part: IContent): Observable<IContent> {
    // if (part.id && part.id > 0) {
    //   let idx = this.getFirstIdx(part.id);
    //   if (idx == -1) {
    //     CONTENT_LIST.push(part);
    //   }
    // }
    // return of(CONTENT_LIST);
    return this.http.post<IContent>(
      "api/parts", 
      part,
      { headers: new HttpHeaders({'Content-type': 'application/json'}) }
    );
  }


  /**
   * Update a part in the part list
   * 
   * If the part is in the part list, update its information
   * otherwise, nothing is done
   * 
   * @param part the part to update
   * @returns observable of the part list after updating
   */
  updateDronePart(part: IContent): Observable<IContent> {
    // if (part.id && part.id > 0) {
    //   let idx = this.getFirstIdx(part.id);
    //   if (idx != -1) {
    //     CONTENT_LIST[idx] = part; // maybe unsafe, but the easiest.
    //   }
    // }
    // return of(CONTENT_LIST);
    return this.http.put<IContent>(
      "api/parts/" + part.id, 
      part,
      { headers: new HttpHeaders({'Content-type': 'application/json'}) }
    );
  }


  /**
   * Delete a part from part list
   * 
   * If the part is in the list, delete it
   * 
   * @param id part id
   * @returns observable of the deleted part, or the INVALID_PART
   */
  // deleteDronePart(id: number): Observable<IContent> {
  //   let idx = this.getFirstIdx(id);
  //   if (idx != -1) {
  //     return of(CONTENT_LIST.splice(idx, 1)[0])
  //   }
  //   return of(this.INVALID_PART);
  // }


  // private getFirstIdx(id: number): number {
  //   for (let i = 0; i < CONTENT_LIST.length; i++) {
  //     if (CONTENT_LIST[i].id == id)
  //       return i;
  //   }
  //   return -1;
  // }

}
