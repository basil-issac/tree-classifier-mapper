import { TestBed } from '@angular/core/testing';

import { PlantMetadataService } from './plant-metadata.service';

describe('PlantMetadataService', () => {
  let service: PlantMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
