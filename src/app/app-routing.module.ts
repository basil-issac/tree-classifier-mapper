import { NgModule } from '@angular/core';


/*Added */
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../app/about/about.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent]
