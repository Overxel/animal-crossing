import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from '../entities/animal';
import { Subject } from 'rxjs';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-animals-data',
  templateUrl: './animals-data.component.html',
  styleUrls: ['./animals-data.component.css']
})
export class AnimalsDataComponent implements OnInit, OnDestroy {  
  displayedColumns: string[] = ['name', 'price', 'habitat', 'months', 'time', 'weather'];
  animalsData: MatTableDataSource<Animal>;
  subscriber: Subject<void>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.getAnimals();
  }

  ngOnDestroy() {
    this.subscriber.next();
    this.subscriber.complete();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.animalsData.filter = filterValue.trim().toLowerCase();

    if (this.animalsData.paginator) {
      this.animalsData.paginator.firstPage();
    }
  }

  getAnimals(){
    this.storeService.animals.subscribe(animals => {
      this.animalsData = new MatTableDataSource(animals);
      this.animalsData.paginator = this.paginator;
      this.animalsData.sort = this.sort;
    });
  }

}
