import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { retry } from 'rxjs/operators'; 
import { Animal } from '../entities/animal'
import { AnimalsService } from './animals.service';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  animals: BehaviorSubject<Animal[]> = new BehaviorSubject([]);

  constructor(private animalsService: AnimalsService) { 
    this.init();
  }

  init() {
    this.animalsService.getAnimals()
    .subscribe(
        animals => {this.setBehaviorSubject('animals', animals); console.log(animals);}
      )
  }


  setBehaviorSubject(name, value) {
    this[name].next(value);
  }
}
