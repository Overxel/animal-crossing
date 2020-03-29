import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsDataComponent } from './animals-data.component';
import { AnimalsDataRoutingModule } from './animals-data-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AnimalsDataComponent],
  imports: [
    CommonModule,
    AnimalsDataRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class AnimalsDataModule { }
