import { TestBed } from '@angular/core/testing';

import { PlantMetadataService } from './plant-metadata.service';
import {AngularFirestore} from "@angular/fire/firestore";

describe('PlantMetadataService', () => {
  let service: PlantMetadataService;

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ]
    });
    service = TestBed.inject(PlantMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
