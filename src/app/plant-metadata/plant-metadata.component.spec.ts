import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMetadataComponent } from './plant-metadata.component';
import {ImageUploadService} from "../services/image/image-upload.service";
import {PlantMetadataService} from "../services/plant-metadata/plant-metadata.service";
import {of} from "rxjs";

describe('PlantMetadataComponent', () => {
  let component: PlantMetadataComponent;
  let fixture: ComponentFixture<PlantMetadataComponent>;

  const PlantMetadataServiceStub = {
    getTreeMetadata() {
      return of({
      });
    }
  };

  const ImageUploadServiceStub = {
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMetadataComponent ],
      providers: [{ provide: PlantMetadataService, useValue: PlantMetadataServiceStub },
                  { provide: ImageUploadService, useValue: ImageUploadServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
