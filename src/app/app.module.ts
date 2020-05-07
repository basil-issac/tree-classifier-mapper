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

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { environment } from '../environments/environment';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";


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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule
  ],
  providers: [PlantMetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
