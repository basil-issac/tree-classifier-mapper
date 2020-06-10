import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class PlantMetadataService {

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    uploaderName: new FormControl(''),
    uploadId: new FormControl(''),
    plantType: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl(''),
    condition: new FormControl(''),
    dateAdded: new FormControl(''),
    imagePath: new FormControl(''),
    seeded: new FormControl(false),
    tags: new FormControl('')
  })

  createTreeMetadataEntry(metadata) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("treeMetadata")
        .add(metadata)
        .then(res => {}, err => reject(err));
    });
  }

  getTreeMetadata() {
    return this.firestore.collection("treeMetadata").snapshotChanges();
  }

  async getPromiseTreeMetadataFromRoot(pathRoot) {
    const snapshot = await this.firestore.collection(pathRoot).get().toPromise();
    return snapshot.docs;
  }


  getTreeMetadataFromRoot(pathRoot) {
    return this.firestore.collection(pathRoot).snapshotChanges();
  }

  createTreeMetadataEntryWithRoot(metadata, pathRoot) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(pathRoot)
        .add(metadata)
        .then(res => {}, err => reject(err));
    });
  }
}
