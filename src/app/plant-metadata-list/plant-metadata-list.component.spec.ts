import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMetadataListComponent } from './plant-metadata-list.component';
import {PlantMetadataService} from "../services/plant-metadata/plant-metadata.service";

describe('PlantMetadataListComponent', () => {
  let component: PlantMetadataListComponent;
  let fixture: ComponentFixture<PlantMetadataListComponent>;

  const PlantMetadataServiceStub = {
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMetadataListComponent ],
      providers: [{ provide: PlantMetadataService, useClass: PlantMetadataServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantMetadataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
