import { Injectable } from '@angular/core';
import { DEVELOPERS } from './list-developers';
import { Developer } from './developer';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor() { }

  getDev(): Observable<Developer[]> {
    return of(DEVELOPERS);
  }
  getDevId(id: number): Observable<Developer> {
    return of(DEVELOPERS.find(developer => developer.id === id));
  }
}
