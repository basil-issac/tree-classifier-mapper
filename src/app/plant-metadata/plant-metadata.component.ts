import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../shared/plant-metadata.service";
import {AngularFireStorage} from "@angular/fire/storage";
import * as uuid from 'uuid';

@Component({
  selector: 'app-plant-metadata',
  templateUrl: './plant-metadata.component.html',
  styleUrls: ['./plant-metadata.component.css']
})
export class PlantMetadataComponent implements OnInit {

  constructor(public plantMetadataService: PlantMetadataService, private angularFireStorage: AngularFireStorage) {}

  ngOnInit(): void {
  }

  plantTypeList = ["Oak", "Maple", "Ash", "Fur", "Cherry", "Pine"];
  firebaseImageFolder = '/plantImages/'; // uploadId, file name
  isFileSelected = false;
  selectedFile = File;

  /* upload file section here */
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.isFileSelected = true;
  }

  onSubmit(): void {
    let data = this.plantMetadataService.form.value;
    data.uploadId = uuid.v4();

    // If the user selected a file, add it to the file store and the database
    if (this.isFileSelected) {
      let imagePath = this.firebaseImageFolder + data.uploadId.toString() + '/' + this.selectedFile.name;
      // Set the image path in the database
      data.imagePath = imagePath;
      // Upload the image to firestore
      this.angularFireStorage.upload(imagePath, this.selectedFile);
    }

    // Upload the metadata with the image path to the database
    this.plantMetadataService.createTreeMetadataEntry(data)
      .then(res => {
        /* do something here....
        maybe clear the form or give a success message */
      });
  }
}

