import { TestBed } from '@angular/core/testing';

import { ImageUploadService } from './image-upload.service';
import {AngularFireStorage} from "@angular/fire/storage";

describe('ImageUploadService', () => {
  let service: ImageUploadService;

  const FireStorageStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireStorage, useValue: FireStorageStub },
      ]
    });
    service = TestBed.inject(ImageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
