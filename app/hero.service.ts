import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  
  private heroesUrl = 'app/heroes';  // URL to web api

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error)
    return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)  // http.get returns an observable
               .toPromise()               // change observable into a promise
               .then(response => response.json().data as Hero[])  
               // The JSON method has a single data property, which in this case holds an array of heroes. 
               .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}