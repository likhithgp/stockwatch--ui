import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SortedPaginationComponent } from './components/sorted-pagination/sorted-pagination.component';
import { InputformComponent } from './components/inputform/inputform.component';

const routes: Routes = [
  {
    component:PaginationComponent,
     path: 'pagination'
  },
  {
    component:SortedPaginationComponent,
     path: 'sort'
  },
  {
    component:InputformComponent,
     path: 'addorupdate'
  },
  {
    component:PaginationComponent,
     path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
