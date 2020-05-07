import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
