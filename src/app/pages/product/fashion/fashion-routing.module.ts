
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionComponent } from './fashion.component';


const routes: Routes = [
  {
    path: '',
    component: FashionComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionRoutingModule { }
