import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PlantMetadataService {

  constructor() { }

  form = new FormGroup({
    uploaderName: new FormControl(''),
    uploadId: new FormControl(''),
    plantType: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    seeded: new FormControl(false)
  })
}
