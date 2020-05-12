import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlantMetadataService {

  constructor(   private firestore: AngularFirestore   ) {}

  form = new FormGroup({
    uploaderName: new FormControl(''),
    uploadId: new FormControl(''),
    plantType: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    imagePath: new FormControl(''),
    seeded: new FormControl(false)
  })

  createTreeMetadataEntry(metadata) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("treeMetadata")
        .add(metadata)
        .then(res => {}, err => reject(err));
    });
  }

  getTreeMetadata() {
    return this.firestore.collection("treeMetadata").snapshotChanges();
  }
}
