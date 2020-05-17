import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private angularFireStorage: AngularFireStorage) { }

  uploadImage(path, file) {
    this.angularFireStorage.upload(path, file);
  }

}
