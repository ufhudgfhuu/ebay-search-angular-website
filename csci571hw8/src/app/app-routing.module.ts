import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailInfoComponent } from './detail-info/detail-info.component';


const routes: Routes = [

  { path: 'detailInfo/:itemId', component: DetailInfoComponent, data: {state: 'DetailPage'} },
  { path: '', redirectTo: '', pathMatch: 'full', data: {state: 'HomePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
