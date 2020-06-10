import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import {PlantMetadataService} from "../services/plant-metadata/plant-metadata.service";
import {of} from "rxjs";

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  const PlantMetadataServiceStub = {
    getTreeMetadata() {
      return of({
      });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [{provide: PlantMetadataService, useValue: PlantMetadataServiceStub}]
    })
    .compileComponents();
  }));


  it('should create', async () => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
