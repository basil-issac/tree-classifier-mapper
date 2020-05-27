import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Added */
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../app/about/about.component';

const routes: Routes = [
  {path: 'About', component: AboutComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
