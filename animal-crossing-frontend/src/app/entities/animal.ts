import { AnimalType } from '../enum/animal-type';
import { Habitat } from '../enum/habitat';
import { Weather } from '../enum/weather';

export interface Animal {
    name: string,
    price: number,
    type: AnimalType,
    habitat: Habitat,
    schedule: {months: [number], timeFrom: Date, timeTo: Date},
    weather: Weather,
    img: string 
}