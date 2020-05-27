import { Component, OnInit } from '@angular/core';
import { PlantMetadataService } from "../services/plant-metadata/plant-metadata.service";
import * as uuid from 'uuid';
import {ImageUploadService} from "../services/image/image-upload.service";

@Component({
  selector: 'app-plant-metadata',
  templateUrl: './plant-metadata.component.html',
  styleUrls: ['./plant-metadata.component.css']
})
export class PlantMetadataComponent implements OnInit {

  constructor(public plantMetadataService: PlantMetadataService, private imageUploadService: ImageUploadService) {}

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
      this.imageUploadService.uploadImage(imagePath, this.selectedFile);
    }

    // Upload the metadata with the image path to the database
    this.plantMetadataService.createTreeMetadataEntry(data)
      .then(res => {
        this.plantMetadataService.form.reset();
      });
  }

}

