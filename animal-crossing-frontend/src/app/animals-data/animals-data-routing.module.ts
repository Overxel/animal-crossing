import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsDataComponent } from './animals-data.component';


const routes: Routes = [
  {
    path: '',
    component: AnimalsDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsDataRoutingModule { }
