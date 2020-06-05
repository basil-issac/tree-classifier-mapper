import { TestBed } from '@angular/core/testing';

import { DataUploaderService } from './data-uploader.service';
import {of} from "rxjs";
import {PlantMetadataService} from "../plant-metadata/plant-metadata.service";
import {ImageUploadService} from "../image/image-upload.service";

describe('DataUploaderService', () => {
  let service: DataUploaderService;

  const PlantMetadataServiceStub = {
    getTreeMetadata() {
      return of({
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PlantMetadataService, useValue: PlantMetadataServiceStub },
        { provide: DataUploaderService}]
    });
    service = TestBed.inject(DataUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
