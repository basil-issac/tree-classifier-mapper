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
import { PlantMetadataService } from "./services/plant-metadata/plant-metadata.service";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { environment } from '../environments/environment';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

import {ImageUploadService} from "./services/image/image-upload.service";

import { AboutComponent } from './about/about.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PlantMetadataComponent,
    PlantMetadataListComponent,
    AboutComponent,
    /*added*/
    routingComponents,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
   ],
  providers: [PlantMetadataService,
    ImageUploadService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
