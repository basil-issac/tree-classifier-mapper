import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {PlantMetadataService} from "../services/plant-metadata.service";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  const PlantMetadataServiceStub = {
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [{ provide: PlantMetadataService, useClass: PlantMetadataServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
