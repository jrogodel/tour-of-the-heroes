import { InMemoryDbService } from 'angular2-in-memory-web-api';



export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Mr. Slug'},
      { id: 12, name: 'Captain Asher'},
      { id: 13, name: 'Great Jamie'},
      { id: 14, name: 'Miss Luna'},
      { id: 15, name: 'Claws'},
      { id: 16, name: 'The Ringer'},
      { id: 17, name: 'Who Man'},
      { id: 18, name: 'Lizard-Goat'},
      { id: 19, name: 'Haven'},
      { id: 20, name: 'Baby Sophia'}
    ];
    return {heroes};
  }
 }