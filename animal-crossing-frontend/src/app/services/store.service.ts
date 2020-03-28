import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Animal } from '../entities/animal'
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  animals: BehaviorSubject<Animal[]> = new BehaviorSubject([]);

  constructor() { }

  setBehaviorSubject(name, value) {
    this[name].next(value);
  }
}
