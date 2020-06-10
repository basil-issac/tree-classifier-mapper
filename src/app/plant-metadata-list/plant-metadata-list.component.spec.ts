import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMetadataListComponent } from './plant-metadata-list.component';
import {PlantMetadataService} from "../services/plant-metadata/plant-metadata.service";
import {of} from "rxjs";

describe('PlantMetadataListComponent', () => {

  const PlantMetadataServiceStub = {
    getTreeMetadata() {
      return of({
      });
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantMetadataListComponent ],
      providers: [{ provide: PlantMetadataService, useValue: PlantMetadataServiceStub}]
    })
    .compileComponents();
  }));

  it('should create', async () => {
    let fixture = TestBed.createComponent(PlantMetadataListComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
    expect(component.showData).toBeFalse();
  });
});
