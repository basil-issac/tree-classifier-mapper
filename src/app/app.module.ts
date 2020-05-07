import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MapComponent } from './map/map.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";

import { PlantMetadataComponent } from './plant-metadata/plant-metadata.component';
import { PlantMetadataListComponent } from './plant-metadata-list/plant-metadata-list.component';
import { PlantMetadataService } from "./shared/plant-metadata.service";

import { ReactiveFormsModule } from "@angular/forms";

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlantMetadataComponent,
    PlantMetadataListComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [PlantMetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
