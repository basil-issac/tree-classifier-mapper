import { TestBed } from '@angular/core/testing';

import { DataUploaderService } from './data-uploader.service';

describe('DataUploaderService', () => {
  let service: DataUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
