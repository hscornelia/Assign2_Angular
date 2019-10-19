import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Professor } from './professor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const professors = [
      {rating: 0, name: 'Kim Myung Soo'},
      {rating: 1, name: 'Um Hyun Sang'},
      {rating: 2, name: 'Lee Jae Hee'},
      {rating: 3, name: 'Kang U'},
      {rating: 4, name: 'Moon Bon ki'},
      {rating: 5, name: 'Kim Jin Soo'},
      {rating: 6, name: 'Lee Jae Wook'},
      {rating: 7, name: 'Moon Byung Ro'},
      {rating: 8, name: 'Kwon Jae Kyung'},
      {rating: 9, name: 'Kim Suk Jun'}
    ];
    return {professors};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(professors: Professor[]): number {
    return professors.length > 0 ? Math.max(...professors.map(professor => professor.rating)) + 1 : 11;
  }
}