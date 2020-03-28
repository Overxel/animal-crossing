import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  apiURL: string = environment.apiURL + 'animals';

  constructor(private http: HttpClient) { }

  getAnimals(){
    return this.http.get(this.apiURL);
  }
}
